import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (req.method === "POST") {
    const body = await req.json();
    console.log(body);
    const data = await client.user.findFirst({
      where: {
        OR: [
          {
            AND: {
              email: body.email,
              password: body.password,
            },
          },
          {
            AND: {
              username: body.email,
              password: body.password,
            },
          },
        ],
      },
      select: {
        username: true,
        id: true,
        email: true,
      },
    });

    return NextResponse.json(data);
  }
}
