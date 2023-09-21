'use client'
import axios from "axios";
import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ContentData{
    title : string,
    content : string
}

export default function Detailpage(props: { params: { conId: any; }; }){
    const conId = props.params.conId
    const [content, setcon] = useState<ContentData>({title: "", content: ""})
    const router = useRouter()
    const [date, setdate] = useState("")

    useEffect(() => {
            //페이지 로드시 내용 요청
            const url = `/api/content?pageId=${conId}`;
            axios.get(url).then(response => {
                setcon(response.data)
                let contTime = new Date(response.data.date)
                const year = contTime.getFullYear();
                const month = String(contTime.getMonth() + 1).padStart(2, '0');
                const day = String(contTime.getDate()).padStart(2, '0'); 
                setdate(`${year}. ${month}. ${day}`)
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const condelete =()=>{
            if(confirm("정말 삭제하시겠습니까?")){//삭제 확인
                    const url = `/api/content?pageId=${conId}`;
                    axios.delete(url).then(response => {
                        router.push('/list/1')// 삭제 완료 후 리스트 1페이지로 이동
                    });
            }
        }

        const conPut =()=>{
            //수정 버튼 누를 시 작성페이지로 이동 
            router.push(`/write/${conId}`)
        }

    return(
        <div className="wrap">
            <div className="inner">

                <div className="detailtop">
                    <h4>공지사항</h4>
                    <h3>{content.title}</h3>
                    <p>{date}</p>
                </div>
                <div className="detailContentBox">
                    <div dangerouslySetInnerHTML={{ __html: content.content }} />
                </div>
                

                <div className="detailBths">
                    <button onClick={()=>router.push("/list/1")}>목록으로</button>
                    <button onClick={conPut}>수정</button>
                    <button onClick={condelete}>삭제</button>
                </div>

            </div>

        </div>
    )
}