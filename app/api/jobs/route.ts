import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createServerSupabaseClient } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page") ?? "1");
  const limit = Number(searchParams.get("limit") ?? "12");
  const category = searchParams.get("category") ?? undefined;
  const q = searchParams.get("q") ?? undefined;
  const remote = searchParams.get("remote");

  const skip = (page - 1) * limit;

  const where = {
    status: "OPEN" as const,
    ...(category ? { category } : {}),
    ...(remote !== null ? { isRemote: remote === "true" } : {}),
    ...(q
      ? {
          OR: [
            { title: { contains: q, mode: "insensitive" as const } },
            { description: { contains: q, mode: "insensitive" as const } },
          ],
        }
      : {}),
  };

  const [jobs, total] = await Promise.all([
    prisma.job.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        client: { select: { id: true, name: true, avatarUrl: true } },
        _count: { select: { proposals: true } },
      },
    }),
    prisma.job.count({ where }),
  ]);

  return NextResponse.json({
    jobs,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) },
  });
}

export async function POST(request: NextRequest) {
  const supabase = await createServerSupabaseClient();
  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, description, category, skills, budget, isFixedPrice, isRemote, deadline } = body;

  if (!title || !description || !category || !budget) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const dbUser = await prisma.user.findUnique({
    where: { supabaseId: user.id },
  });

  if (!dbUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const job = await prisma.job.create({
    data: {
      clientId: dbUser.id,
      title,
      description,
      category,
      skills: skills ?? [],
      budget,
      isFixedPrice: isFixedPrice ?? true,
      isRemote: isRemote ?? true,
      deadline: deadline ? new Date(deadline) : null,
    },
  });

  return NextResponse.json(job, { status: 201 });
}
