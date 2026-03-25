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
  const { contractId, amount, provider } = body;

  if (!contractId || !amount) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const dbUser = await prisma.user.findUnique({ where: { supabaseId: user.id } });
  if (!dbUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const contract = await prisma.contract.findUnique({ where: { id: contractId } });
  if (!contract || contract.clientId !== dbUser.id) {
    return NextResponse.json({ error: "Contract not found or unauthorized" }, { status: 404 });
  }

  const payment = await prisma.payment.create({
    data: {
      contractId,
      userId: dbUser.id,
      amount,
      provider: provider ?? "qpay",
      status: "PENDING",
    },
  });

  // TODO: Initiate QPay / payment gateway call here and update providerRefId

  return NextResponse.json(payment, { status: 201 });
}
