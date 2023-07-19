import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    if (req.method === "POST") {
        const body = await req.json();
        console.log(body)
        const userEmail = await client.user.findUnique({
            where: {
                email: body.email
                },
        })

        const userName = await client.user.findUnique({
            where: {
                username: body.username
            }
        })

        // mengecek username
        if (userName) return NextResponse.json({success: 209, message: "Username telah digunakan"})

        //mengecek email
        if(userEmail) return NextResponse.json({success: 209, message: "Email telah digunakan"})

        await client.user.create({
            data: body
        })

        return NextResponse.json({success: 201, message: "Data tersimpan"})

    } else {
        return NextResponse.json({status: 204}.status)
    }
}
