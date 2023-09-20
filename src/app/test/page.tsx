import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

export default async function handler() {
    console.log("포스트");

    const newNotice = await client.post.create({
        data: {
            title:"서버에 올림 ",
            content: "ㅠㅠㅠㅠ",
            date: new Date().toString()
        }
    });


    return(
        <div>
            시발 짜증난다 ㅠㅠㅠ
        </div>
    )

}
