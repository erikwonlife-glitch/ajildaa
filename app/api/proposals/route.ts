import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createServerSupabaseClient } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const supabase = await createServerSupabaseClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { jobId, coverLetter, bidAmount, deliveryDays } = body;

  if (!jobId || !coverLetter || !bidAmount || !deliveryDays) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const dbUser = await prisma.user.findUnique({ where: { supabaseId: user.id } });
  if (!dbUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const existing = await prisma.proposal.findUnique({
    where: { jobId_workerId: { jobId, workerId: dbUser.id } },
  });
  if (existing) {
    return NextResponse.json({ error: "Already applied to this job" }, { status: 409 });
  }

  const proposal = await prisma.proposal.create({
    data: { jobId, workerId: dbUser.id, coverLetter, bidAmount, deliveryDays },
  });

  return NextResponse.json(proposal, { status: 201 });
}
