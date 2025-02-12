import { PrismaClient, Test } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()
export async function GET() {
  // testテーブルから全件取得
  const Tests: Test[] = await prisma.test.findMany()
  // return Response.json(Tests)
  return NextResponse.json(Tests)
}
