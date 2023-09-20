import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

export default async function handler( req: NextApiRequest ,res: NextApiResponse) {
    console.log("포스트");
    console.log(req.body)

    
    try {
        console.log(req.body)

        if(req.body.conid == 'new'){
            console.log( "새글")
            const newNotice = await client.post.create({
                data: {
                    title: req.body.title,
                    content: req.body.content,
                    date: new Date().toString()
                }
            });
            res.json(newNotice);

        }else{
            console.log( "헌글")
            const newNotice = await client.post.update({
                where:{
                    id:req.body.conid
                },
                data: {
                    title: req.body.title,
                    content: req.body.content,
                    
                }
            });
            res.json(newNotice);

        }
        

        res.json("테스트중");
    } catch (error) {
        res.json({ error: "서버 오류 발생" });
    }
}
