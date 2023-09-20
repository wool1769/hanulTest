import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const client = new PrismaClient();

interface contentData{
    id: string;
    title: string;
    content: string;
    date: string;
}
export default async function handler(  req: NextApiRequest ,res: NextApiResponse){

    const pnum = parseInt(req.query.pagenum as string);
    const skipnum = (pnum - 1) * 10;
    
    if(req.method === "POST"){res.json(req.headers.host)}

    if(req.method === "GET"){

        if(req.query.pagenum != null && req.query.search == "undefined"){
            const totalcont = await client.post.count()
            const posts = await client.post.findMany({
                orderBy: {
                    id : 'desc', 
                },
                take: 10, 
                skip: skipnum
    
                
            });
            res.json({datacount: totalcont,content: posts})
        }

        if(req.query.pagenum != null && req.query.search != "undefined"){
            // console.log("??")
            // console.log(req.query.search)
            const totalcont = await client.post.count({
                where: {
                    OR: [
                    {
                        title: {
                          contains: req.query.search as string, // title에 검색어 포함 여부 확인
                        },
                    },
                    {
                        content: {
                          contains: req.query.search as string, // content에 검색어 포함 여부 확인
                        },
                    },
                    ],
                },        

            })
            const posts = await client.post.findMany({
                where: {
                    OR: [
                    {
                        title: {
                          contains: req.query.search as string, // title에 검색어 포함 여부 확인
                        },
                    },
                    {
                        content: {
                          contains: req.query.search as string, // content에 검색어 포함 여부 확인
                        },
                    },
                    ],
                },                
                orderBy: {
                    id : 'desc', 
                },
                take: 10, 
                skip: skipnum
    
                
            });
            res.json({datacount: totalcont,content: posts})
        }
    
        if(req.query.pageId != null && req.query.search == null){
            const post = await client.post.findUnique({
                where: {
                    id: req.query.pageId as string
                }
            });
            res.json(post)
        }


    }

    if(req.method === "DELETE"){
        const del = await client.post.delete({
            where:{
                id: req.query.pageId as string
            }
        })
        res.json("ok")
    }




}
