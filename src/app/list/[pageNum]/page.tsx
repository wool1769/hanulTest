'use client'

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";



interface contentData{
  title: string,
  date: string,
  id: string

  
}

export default function ListPage(props: { params: { pageNum: number; }; searchParams: { search: string; }; }) {
  
  const instance = axios.create({
    baseURL: 'https://hanul-test.vercel.app', // 동일 도메인 또는 하위 도메인
    proxy: {
      host: 'localhost',  // 프록시 서버 호스트 (로컬 호스트)
      port: 443,         // 프록시 서버 포트
    },
  });
    

    const router = useRouter();


    const [content, setcon] = useState<contentData[]>([]);
    const [conCount, setCount] = useState<number>(0.5);

    let pageNum = props.params.pageNum
    let searchPram =decodeURIComponent(props.searchParams.search)

    
    




    

    useEffect(() => {
      instance.post("/api/content").then(response => {
      let url = `/api/content?pagenum=${pageNum}`;
      if(searchPram != undefined){
        url +=`&search=${encodeURIComponent(props.searchParams.search)}`
      }
      // console.log(searchPram)
        // console.log(url)
        instance.get(url).then(response => {
            let data = response.data;
            setcon(data.content);
            setCount(data.datacount);
        });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchPram]);
    
// 페이징_______________________________________
    const pageBtn = [];
    let lastPage = Math.ceil(conCount/10)
    let lastGrup = Math.ceil(lastPage/5)-1
    let pageGrup = Math.floor((pageNum-1) / 5)


    let preBool = pageNum != 1 ? 'prev' : "blind"
    let nextBool = lastPage != pageNum ? 'next' : "next blind"
    let doublepreBool = pageGrup  != 0 ? 'dprev' : "blind"
    let doublenextBool = pageGrup != lastGrup ? 'dnext' : "blind"

    let zeroCont = conCount == 0 ? "visible" : "blind"
    let pBtnZero = conCount == 0 ? "blind" : ""
    let loding = conCount == 0.5 ? "visible" : "blind"

    let doublepre = (pageGrup -1) * 5 +1
    let doublNext = (pageGrup +1) * 5 +1


    let btnFor = 5;
    if(!(pageGrup != lastGrup)){
        btnFor = lastPage % 5
    }

    let searchPage='';
    let searchbox =""
    let cherchimg="";
    let cercheimg="blind";
    // 서치 결과추가

    if(props.searchParams.search != undefined){
        
        searchPage = `?search=${encodeURIComponent(searchPram)}`
        searchbox = searchPram
        cherchimg="blind";
        cercheimg="";
    }
    


    pageBtn.push(<div className={doublepreBool}><Link href={`/list/${doublepre}${searchPage}`}></Link></div>)
    pageBtn.push(<div className={preBool}><Link href={`/list/${pageNum-1}${searchPage}`}></Link></div>)
    for(let i = 0; i < btnFor ;i++){
        pageBtn.push(<div><Link href={`/list/${i+1+pageGrup*5}${searchPage}`}>{i+1+pageGrup*5}</Link></div>)
    }
    pageBtn.push(<div className={nextBool}><Link href={`/list/${Number(pageNum)+1}${searchPage}`}></Link></div>)
    pageBtn.push(<div className={doublenextBool}><Link href={`/list/${doublNext}${searchPage}`}></Link></div>)

// 서치박스_____________________________________

    


    const [searchBoxValue, setsbV] = useState('')

    const search = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        let cearchcode = encodeURIComponent(searchBoxValue)
        console.log(">??")

        if ((e.key === 'Enter')  && searchBoxValue.length > 0) {
            router.push(`/list/1?search=${cearchcode}`)
        }
        
    }
    

    return (
        <div className="wrap">
            <div className="listTop">
            <h2>공지사항</h2>
            <div className="search-bar">
                <input type="text" defaultValue={searchbox}  placeholder="검색어" onKeyDown={search} onChange={(e)=>setsbV(e.target.value)}/>
                <button><img id="cherchimg" className={cherchimg} src="/img/Search_common.png" alt="" width={24} height={24} />
                        <img onClick={()=>router.push('/list/1')} className={cercheimg} src="/img/Clearbtn.png" alt="" width={24} height={24}/>
                </button>
            </div>
            </div>

            <div className="contentsBox">
              <div id="noContent" className={zeroCont}>공지사항이 없습니다.</div>
              <div id="lodingBox" className={loding}>                
                <div className="dot-container">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>

              </div>
                {content.map((a:contentData,i:number)=>{
          return(
            <ContentItem key={a.id} content = {a} />
          )
        })}
            </div>

        <div id="pageBtn" className={pBtnZero}>{pageBtn}</div>


    </div>
    );
}


function ContentItem(props: { content: { title: string; date: string; id: string; }; }){


    let listTitle;
    //100글자

    if(props.content.title.length <= 100){
      listTitle = props.content.title
    }else{
      listTitle = props.content.title.slice(0, 100) + "..."
    }
  
    // 시간표출
    const nowtime = new Date();
    let contTime = new Date(props.content.date);
    let notiTime
    let timeCalc = Math.floor((nowtime.getTime() - contTime.getTime())/1000);
  
    const year = contTime.getFullYear();
    const month = String(contTime.getMonth() + 1).padStart(2, '0');
    const day = String(contTime.getDate()).padStart(2, '0'); 
  
  
    if(timeCalc/60/60/24 >= 1 ){
      notiTime = `${year}. ${month}. ${day}`
    }else if(timeCalc/60/60 >= 1){
      notiTime = `${Math.floor(timeCalc/60/60)}시간 전`
    }else if(timeCalc/60 >= 1){
      notiTime = `${Math.floor(timeCalc/60)}분 전`
    }else {
      notiTime= "방금전"
    }
    
  
  
    return(
      <div className="contentBox">
        <h3 className="contentTitle"><Link href={`/detail/${props.content.id}`}>{listTitle}</Link></h3>
        <p className="contentDate">{notiTime}</p>
      </div>
    )
  }
  
