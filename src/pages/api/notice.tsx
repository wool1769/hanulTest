import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const client = new PrismaClient();

export default async function handler( req: NextApiRequest ,res: NextApiResponse) { 
    try {
        if(req.body.conid == 'new'){
            const newNotice = await client.post.create({
                data: {
                    title: req.body.title,
                    content: req.body.content,
                    date: new Date().toString()
                }
            });
            res.json(newNotice);

        }else{
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
    } catch (error) {
        res.json({ error: "서버 오류 발생" });
    }
}
