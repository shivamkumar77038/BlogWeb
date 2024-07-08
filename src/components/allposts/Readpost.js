import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect,useState } from 'react';
import { databases } from '../../appwrite/auth';
import { Query } from "appwrite";


export default function Readpost() {
    const [post,setpost]=useState([]);
    const location = useLocation();
    const id = location.state.id;
    

    useEffect(  ()=>{
        let promise =  databases.listDocuments(
            "DatabaseId",
            "CollectionId",
            [
                Query.equal('$id',[id])
            ]
        );
        
       promise.then( function (response) {
            // console.log(response.documents[0])
            setpost(response.documents[0]);
        }, function (error) {
            console.log(error);
        });
    },[id])

  return (
    <>
    <div className='m-14 mt-15 flex-col justify-between align-middle w-fulln h-screen font-serif  '>
      <div className='flex-col shadow-2xl rounded-lg bg-white h-auto p-4 sm:p-10'>
      <div className='w-full h-auto p-4 sm:p-4 '>
      <h2 className=' text-purple-500 font-serif font-bold text-md justify-evenly sm:text-xl '> Title</h2>
                  <p className='font-bold text-sm sm:text-md'>{post.title}</p>
       </div>
       <div className='w-full h-auto p-4 sm:p-4'><h2 className='text-purple-500 font-serif font-bold text-md justify-evenly sm:text-xl '>Author:</h2>
                  <p className='font-bold text-sm sm:text-md'>{post.subhead}</p>
        </div>
        <div className='w-full h-auto p-4 sm:p-4'><h2 className='text-purple-500 font-serif font-bold text-md justify-evenly sm:text-xl ' >content</h2>
                  <p className='font-bold text-sm sm:text-md'>{post.content}</p>
        </div>
      </div>
    </div>
    </>
  )
}
