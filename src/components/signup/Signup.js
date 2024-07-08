import React from 'react'
import {ID } from "appwrite";
import { useState } from 'react'
import { account } from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom';
import { loginbtn } from '../../store/authSlice';
import { useDispatch } from 'react-redux';




export default function Signup() {
 const [userData,setData] = useState({email:"",password:"",name:""})
 const navigate = useNavigate();
 const dispatch = useDispatch();



 const login = async ()=>{
  
  const promise = account.createEmailPasswordSession(userData.email,userData.password);
  navigate("/")
   promise.then(function (response) {
    dispatch(loginbtn())
  alert("You are logged In");
  localStorage.setItem("isloged", "true");
  console.log("login function evoked from signup");
 }, function (error) {
  console.log(error); 
 });

  
    
 }
 

 const createAccount = (e)=>{
e.preventDefault();
 
    const signPromise = account.create(ID.unique(),userData.email,userData.password,userData.name
    )
    signPromise.then(function(res){
      login();
    },function(error){
      console.log(error)
    })

    

  
  }

  // js function for change input password to 

const [showPassword, setShowPassword] = useState(false);

const passwordview = () => {
  setShowPassword(!showPassword);
};
  return (
    <>
         <div className='w-full h-screen bg-white-900 flex justify-center p-10'>
        
         <div className='mt-5  bg-white w-11/12 h-5/6 rounded-2xl shadow-2xl font-serif shadow-black  sm:w-3/5 md:w-3/6 py-2' >
                        <h1 className=' text-purple-950 text-3xl font-bold text-center pt-1 hover:scale-105'>Sign Up Here !</h1>
              <div className='flex flex-col  justify-around py-7'>
               
                <div className='bg-white w-full h-6/12'>
                    <label className='px-3'>Enter Your Name</label><br/>
                     <div className='flex justify-center w-full py-2 '>
                            <input  className='w-11/12 h-12 rounded-lg flex justify-center shadow-lg' type="text" placeholder=' enter Here' value={userData.name} onChange={(e)=>setData({...userData,name:e.target.value })}/>
                     </div>
                 </div>
                 <div className='bg-white w-full h-2/6'>
                 <label className='px-3'>Enter Your Email</label><br/>
                     <div className='flex justify-center w-full py-2 '>
                            <input className=' shadow-lg border-purple-500 w-11/12 h-12 rounded-lg flex justify-center' type="text" placeholder=' enter here' value={userData.email} onChange={(e)=>setData({...userData,email:e.target.value })}/>
                     </div>
                 </div>
                 <div className='bg-white w-full h-2/6'>
                 <label className='px-3'>Enter Your Password</label><br/>
                   <div className='flex justify-center w-full py-2 '>
                           <input className=' shadow-lg w-10/12 h-12 rounded-lg flex justify-center '  type={showPassword ? 'text' : 'password'} placeholder=' enter here' value={userData.password} onChange={(e)=>setData({...userData,password:e.target.value })}/><button onClick={passwordview} className='bg-purple-500 m-1 rounded-2xl hover:bg-purple-900' >{showPassword ? 'Hide' : 'Show'}  </button>
                   </div>
                 </div>
                 <div className='bg-white w-full h-2/6 flex justify-center  py-2'>
                         <button className=' bg-purple-500 w-11/12 h-12 rounded-2xl hover:bg-purple-900' type='submit'onClick={createAccount} >Create Account</button>
                 </div>
                 
             
                
              

              </div>
             </div>
            

         
        
        </div>    
    </>
  )
}
