import React from 'react'

import { databases } from '../appwrite/auth'
import { useEffect,useState } from 'react'
import Postcard from './allposts/Postcard'
import { Query } from 'appwrite';

export default function Home() {
    const [blog,setblog] = useState([]);
     const[blogQuery,setQuery] = useState('all');

     const buttons =[
        {name:"All ",value:"all"},
        {name:"Technology",value:"Technology"},
         {name:"Fashion" , value :"Fashion"},
         {name:"Politics" , value :"Politics"},
         {name:"Sports" , value :"Sports"},
         {name:"Entertainment" , value :"Entertainment"},
         {name:"Business" , value :"Business"},
     ]
 const btnQuery =(e)=>{
    const value = e.target.value
    setQuery(value);
    
    
 }



// listing all posts
    useEffect(()=>{

     let promise = databases.listDocuments(
            "DataBaseId",
            "collectionId",
             
            blogQuery === "all" ? [] : [
             Query.equal('domain',blogQuery)
            ]
             
        );
         promise.then(function (response) {
            
            setblog(response.documents)
           
        }, function (error) {
            console.log(error);
        });
    },[blogQuery]
    )

    // truncate function for extracting 30+.... charcater
    function truncateHTML(htmlString) {
        if (htmlString.length > 30) {
            return htmlString.substring(0, 30) + '...';
        } else {

            return htmlString;
        }
    }
  return (
    <>
        
       <div className=' font-serif flex-row mt-10 flex-wrap h-screen overflow-auto bg-slate-50 to-zinc-50  '>
        <div className='bg-purple-300 w-full h-auto fixed  overflow-x-auto flex justify-evenly shadow-lg'>
            {buttons.map((item,index)=>{
                return <button  onClick={btnQuery} className='bg-purple-300 text-black rounded-md font-serif v text-xs font-light p-2 hover:text-white ' key={index} value={item.value} >{item.name}</button>
            })}
        </div>
        <div className='  grid grid-cols-1 mt-9 sm:grid-cols-2   md:grid-cols-3 ' >
            {blog.length===0 && <div className='flex justify-center h-screen w-full min-h-screen p-28 '></div> }
            {blog.map((blog,index)=>(
                <Postcard key={index}  {...blog} metaDesc={truncateHTML(blog.content)}/>
            ))}
        </div>
       </div>
    </>
  )
}
