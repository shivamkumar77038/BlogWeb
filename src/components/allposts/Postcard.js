import React from 'react'
import { useNavigate } from 'react-router'





export default function Postcard({title,subhead,metaDesc,$id}) {
 const navigate = useNavigate();
  return (
    <>
    <div className=" border-s-blue-200 bg-white-100 flex items-center justify-center w-auto h-auto p-1 px-1 m-3">
  <div className="max-w-xl rounded overflow-hidden shadow-md bg-white shadow-purple-500 hover:shadow-lg">
 
    <div className="px-6 py-4 ">
      <div className="font-bold text-xl mb-2 " ><p className='text-purple-600'>Title</p>:- {title}</div>
      <p className=' text-white-700 text-base text-black'>Authore :- {subhead}</p>
      <p className='text-white-700 text-base text-black'>Description :- {metaDesc}</p> 
    </div>
    
    <div className="px-6 pt-4 pb-2">
      <button className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-md" onClick={()=>navigate("/readpost",{state:{id:$id}})} >Read More</button>
    </div>
  </div>
</div>
    </>
  )
}
