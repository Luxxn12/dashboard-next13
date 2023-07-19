import client from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const {id} = await req.json()
    const data = await client.user.findUnique({
        where : {
            id : id as any
        },
        select: {
            email: true,
            username: true
        }
    })
    return NextResponse.json({data})
}