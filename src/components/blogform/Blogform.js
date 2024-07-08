import React from 'react'
import { ID } from 'appwrite';
import { useState } from 'react'
import { databases } from '../../appwrite/auth';
import { useNavigate } from 'react-router-dom';

export default function Blogform() {

const [post,create] = useState({title:"",sub:"",content:"",domain:""});
const navigate = useNavigate();

const options = [
  "Technology",
  "Fashion",
  "Politics",
  "Business",
  "Sports",
  "Entertainment"
];
const onDomainOpt = (e) => {
  e.preventDefault();
 create({...post,domain:e.target.value});
}

const createPost= async (e)=>{
  e.preventDefault();

     const promise = databases.createDocument(
   'DatabaseId',
    'collectionId',
    ID.unique(),
    {title:post.title,subhead:post.sub,content:post.content,domain:post.domain}
    );

await   promise.then(function (response) {
   
   navigate("/");
}, function (error) {
  console.log(error);
});
}


  return (
    <>
        <div className='w-full h-screen bg-white-900 flex justify-center p-10 '>
         <div className=' mt-5  bg-white w-11/12 h-5/6 rounded-2xl shadow-2xl font-serif shadow-black  sm:w-3/5 md:w-3/6 py-2' >
                <h1 className=' text-purple-950 text-xl font-bold text-center pt-0 '>Create Blog!</h1>
              <div className='flex flex-col  justify-around py-7'>

                 

                  <div className='bg-white w-full h-2/6'>
                 <label className='px-1'>Enter Your Blog Title</label><br/>
                     <div className='flex justify-center w-full py-2 bg-white'>
                     <input className='shadow-2xl border-purple-500 w-11/12 h-8 rounded-lg flex justify-center' value ={post.title} onChange={(e)=>create({...post,title:e.target.value })} type="text" placeholder=' enter here'/>
                     </div>
                 </div>


                 <div className='bg-white w-full h-2/6'>
                 <label className='px-1'>Enter Author Name</label><br/>
                   <div className='flex justify-center w-full py-2 bg-white text-start'>
                   <input className='  shadow-2xl w-11/12 h-12 rounded-lg flex justify-center ' value ={post.sub} onChange={(e)=>create({...post,sub:e.target.value })} type="text" placeholder=' enter here'/>
                   </div>

                   <div className='bg-white w-full h-2/6'>
                 <label className='px-1'>Enter Domain</label><br/>
                   <div className='flex justify-start w-full py-2 bg-white text-start'>
                           <label >Chose Your Blog domain:- </label>

                               <select onChange={onDomainOpt}>
                                       {options.map((item, index) => {
                                       return (
                                      <option key={index} value={item}>
                                      {item}
                                       </option>
                                          );
                                        })}
                                      </select>

                   </div>


                   <div className='bg-white w-full h-2/6'>
                 <label className='px-1'>Enter Your Content</label><br/>
                   <div className=' w-full py-1 px-3 bg-white text-wrap' >
                   <textarea className=' shadow-2xl w-full h-24 rounded-lg text-wrap ' value ={post.content} onChange={(e)=>create({...post,content:e.target.value })} type="text" placeholder=' enter here'/>
                   </div>


                 </div>
                 <div className='bg-white w-full h-2/6 flex justify-center  py-2'>
                 <button onClick={createPost} type="submit" className=' bg-purple-900 w-11/12 h-12 rounded-2xl '>Add Blog</button>
                 </div>
                 </div>
                
                 

              </div>
             </div>

         
        
        </div>  
        </div>
    </>
  )
}
