'use client'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SetStateAction, useEffect, useRef, useState } from 'react';


export default function Edit(props: { params: { edit: string; }; }){
    const conId = props.params.edit
    const router = useRouter()
    const editorRef = useRef<Editor | null>(null);

    useEffect(() => {
        


        if(conId != "new"){
            axios.post("/api/content").then(response => {
                const url = `http://${response.data}/api/content?pageId=${conId}`;
                axios.get(url).then(response => {
                    setValue(response.data.title)
                    setDate(response.data.date)
                    if(editorRef.current)
                    editorRef.current.getInstance().setHTML(response.data.content)
                    
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


    
    const noticePost = async () => {
        
        let htmlContent;
        if(editorRef.current)
        htmlContent= editorRef.current.getInstance().getHTML();
        content = htmlContent;

        await axios.post('/api/notice',{
            conid : conId,
            title : title,
            content : content
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
                <Editor
                    ref={editorRef}
                    // initialValue="망가짐.."
                    previewStyle="vertical"
                    height="600px"
                    initialEditType="WYSIWYG"
                    useCommandShortcut={true}
                    hideModeSwitch={true}
                    // onChange={handleEditorChange}
                />

                <div className='detailBths'>
                    <button onClick={()=>router.back()}>취소</button>
                    <button onClick={noticePost}>저장</button>
                </div>
            </div>
        </div>
    )
}