import { useState,useEffect } from "react";
import {copy,linkIcon,loader,tick} from "../assets";

const Demo = () => {
  return (
    
    <section className="w-full max-w-xl mt-16">
    
   {/* Search bar section */ }
    

   <div className="flex flex-col w-full gap-2">
   
   <form className="relative flex justify-center items-center" 
   onSubmit={() =>{}}
   >
   <image src="{linkIcon}" alt="link_icon" className="absolute left-0  my-2 ml-3 w-5" />

   <input type="url" placeholder="Enter url" value="" onChange={()=>{}} required className="url_input peer" />

   <button type="submit" className="submit_btn peer-focus:border-gray-800 peer-focus:text-gray-700"></button>
   </form>

   {/* Browse URL history*/ }
   </div>
 {/* Display result from the API*/ }

    </section>
    
  )
}

export default Demo
