'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SetStateAction, useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';

const Ckeditor = dynamic(()=>import('@/app/ckediter/editer'),{
    loading: () => <p>Loading CKEditor...</p>,
    ssr: false, // 클라이언트 측에서만 로드
})



export default function Edit(props: { params: { edit: string; }; }){
    const conId = props.params.edit
    const router = useRouter()
    // const editorRef = useRef<Editor | null>(null);

    useEffect(() => {
        


        if(conId != "new"){
            axios.post("/api/content").then(response => {
                const url = `http://${response.data}/api/content?pageId=${conId}`;
                axios.get(url).then(response => {
                    setValue(response.data.title)
                    setDate(response.data.date)
                    setText(response.data.content)
                    
                });
            });
        }
        }, []);


    const [title, setValue] = useState("");
    let content;
    let date;
    let [conDate, setDate] = useState("")

    let nd;
    if(conId=="new"){
        nd = new Date();
    }else{
        nd = new Date(conDate);
    }

    const year = nd.getFullYear();
    const month = String(nd.getMonth() + 1).padStart(2, '0');
    const day = String(nd.getDate()).padStart(2, '0'); 

    date = `${year}. ${month}. ${day}`



    const [consText, setText] = useState(""); 
    const noticePost = async () => {
        
        // let htmlContent;
        // // if(editorRef.current)
        // // htmlContent= editorRef.current.getInstance().getHTML();
        // content = htmlContent;


        await axios.post('/api/notice',{
            conid : conId,
            title : title,
            content : consText
        }).then(respone=>{
            // console.log(respone.data.id);
            router.push(`/detail/${respone.data.id}`)
        })
        .catch(error=>(console.log(error.data)))
        };

        

        const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
            setValue(e.target.value);
            // console.log(title)

        };

    return(
        <div className='wrap'>
            <div className='inner'>
                <div className='detailtop'>
                    <h4>공지사항</h4>
                    <textarea placeholder='제목을 입력하세요' value={title} onChange={handleChange}/>
                    <p>{date}</p>
                </div>
                

                <div className='editerBox'>

                    <Ckeditor/>
                    
                </div>

                {/* <Editor
                    ref={editorRef}
                    // initialValue="망가짐.."
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="WYSIWYG"
                    useCommandShortcut={true}
                    hideModeSwitch={true}
                    // onChange={handleEditorChange}
                /> */}

                <div className='detailBths'>
                    <button onClick={()=>router.back()}>취소</button>
                    <button onClick={noticePost}>저장</button>
                </div>
            </div>
        </div>
    )
}