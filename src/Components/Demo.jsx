import { useState,useEffect } from "react";
import {copy,linkIcon,loader,tick} from "../assets";
import { useLazyGetSummaryQuery } from "../Services/article";

const Demo = () => {
 {/* Adding Logic to our URL */ }

 const [article,setArticle] =useState({url:'',summary:'',});

 //Storing the history of previous article
 const [allArticles ,setAllArticles]= useState([]);

 useEffect(()=>{
  const articleFromLocalStorage =JSON.parse( 
    localStorage.getItem('article')
  )

  if(articleFromLocalStorage){
    setAllArticles(articleFromLocalStorage);
  }

 },[]);

 //We call our new created hook
const [getSummary,{error,isFetching}] = useLazyGetSummaryQuery();

//
 const handleSubmit =async(e) => {
  e.preventDefault();// prevent defeault behavior of the browser
  const {data} = await getSummary({articleUrl:article.url});

  if(data?.summary){
    const newArticle ={...article,summary:data.summary};
    setArticle(newArticle);
    console.log(newArticle);

    const updatedAllArticles=[newArticle,...allArticles];

    setArticle(newArticle);
    setAllArticles(updatedAllArticles);

    //Update local
    localStorage.setItem('article',JSON.stringify(updatedAllArticles))

  }
 }
  return (
    
    <section className="w-full max-w-xl mt-16">
    
   {/* Search bar section */ }
    

   <div className="flex flex-col w-full gap-2">
   
   <form className="relative flex justify-center items-center" 
   onSubmit={handleSubmit}
   >
   <image src="{linkIcon}" alt="link_icon" className="absolute left-0  my-2 ml-3 w-5" />

   <input type="url" placeholder="Enter url" value={article.url} onChange={(e)=>setArticle({ ...article,url:e.target.value})} required className="url_input peer" />

   <button type="submit" className="submit_btn peer-focus:border-gray-800 peer-focus:text-gray-700">Send</button>
   </form>

   {/* Browse URL history*/ }
    <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
    {
      allArticles.map((item,index) =>(
        <div
        key={`link-${index}`}
        onClick={() =>setArticle(item)}
        className="link_card">
        <div className="copy_btn">
        <img 
        src={copy}
        alt="copy_icon"
        className="w-[40%] h-[40%] object-contain"
        />
        </div>
        <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate"> {item.url}</p>
        </div>

      ))}
    </div>

   </div>
 {/* Display result from the API*/ }

 <div className="my-10 max-w-full flex justify-center items-center">
 {
  isFetching? (
    <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
  ): error?(
    <p className="font-inter font-bold text-black"> 
    Well, that was not suppose to happen....
    <br/>
    <span className="font-satoshi font-normal text-grey-700"> 
    {error?.data?.error}
    </span>
    </p>
  ):(
    article.summary && (
      <div className="flex flex-col gap-3">
      <h2 className="font-staoshi font-bold text-gray-600 text-xl">
      article<span className="blue_gradient">Summary </span>
      </h2>
      <div className="summary_box">
      <p  className="font-inter font-medium text-gray-700"
      > {article.summary}</p>
      </div>
      </div>
    )
  )
 }
 
 </div>

    </section>
    
  )
}

export default Demo
