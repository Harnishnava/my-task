import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { rejects } from "assert";
import { createTaskSchema } from "../../ValidationSchema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createTaskSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const newTask = await prisma.task.create({
    data: { title: body.title, description: body.description },
  });

  return NextResponse.json(newTask, { status: 201 });
}
