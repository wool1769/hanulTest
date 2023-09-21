'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SetStateAction, useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';

const Ckeditor = dynamic(()=>import('@/app/ckediter/editer'),{
    loading: () => <p>Loading CKEditor...</p>,
    ssr: false, 
})



export default function Edit(props: { params: { edit: string; }; }){
    const conId = props.params.edit
    const router = useRouter()
    // const editorRef = useRef<Editor | null>(null);


    useEffect(() => {
        if(conId != "new"){ //새글 작성이 아닐 경우 수정할 데이터 요청 
                const url = `/api/content?pageId=${conId}`;
                axios.get(url).then(response => {
                    setValue(response.data.title)
                    setDate(response.data.date)
                    setText(response.data.content)
                });
        }
        }, []);


    const [title, setValue] = useState("");
    let date;
    let [conDate, setDate] = useState("")

    let nd;
    if(conId=="new"){  //새글 , 수정 구분
        nd = new Date(); 
    }else{
        nd = new Date(conDate);
    }

    const year = nd.getFullYear();
    const month = String(nd.getMonth() + 1).padStart(2, '0');
    const day = String(nd.getDate()).padStart(2, '0'); 

    date = `${year}. ${month}. ${day}`


 //로딩창 띄우기.. 
    const [lodingBool , setBool] = useState(false)
    const [consText, setText] = useState(""); 
    const noticePost = async () => {
        setBool(true)
        await axios.post('/api/notice',{
            conid : conId,
            title : title,
            content : consText
        }).then(respone=>{
            setBool(false)
            // console.log(respone.data.id);
            router.push(`/detail/${respone.data.id}`)
        })
        .catch(error=>(console.log(error.data)))
        };
        const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
            setValue(e.target.value);
        };
    
        const textval =(e: SetStateAction<string>)=>{
            setText(e)
        }

        // 로딩

        let pLoding =  lodingBool ? "postLoding" : "blind"

    return(
        <div className='wrap'>

//로딩.. 화면 잠금 
            <div id="lodingBox" className = {pLoding}>                
                <div className="dot-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>

            <div className='inner'>
                <div className='detailtop'>
                    <h4>공지사항</h4>
                    <textarea placeholder='제목을 입력하세요' value={title} onChange={handleChange}/>
                    <p>{date}</p>
                </div>
                <div className='editerBox'>

                    <Ckeditor value ={consText} onChange={textval} />
                    
                </div>

                <div className='detailBths'>
                    <button onClick={()=>router.back()}>취소</button>
                    <button onClick={noticePost}>저장</button>
                </div>
            </div>
        </div>
    )
}