import React from 'react'
import { account } from '../../appwrite/auth';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {loginbtn} from '../../store/authSlice'
import { useNavigate } from 'react-router-dom';



export default function Login() {
const[data,setdata]=useState({email:"",password:""});



const dispatch = useDispatch();
const navigate = useNavigate();

// login function for appwrite 
const login = async ()=>{
  
  localStorage.setItem("isloged","true")
  navigate("/")
  const promise = account.createEmailPasswordSession(data.email,data.password);
   await promise.then(function (response) {

  alert("You are logged In");
  
 
  dispatch(loginbtn())
 }, function (error) {
  alert("Invalid Email or Password pls signup first");
  navigate("signup");
  console.log(error); 
 });
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
                <h1 className=' text-white-950 text-3xl font-bold text-center pt-1  hover:scale-105 '>Login Here !</h1>
              <div className='flex flex-col  justify-around py-7'>
                 

                  <div className='bg-white w-full h-2/6'>
                 <label className='px-3'>Enter Your Email</label><br/>
                     <div className='flex justify-center w-full py-2 bg-white'>
                     <input className=' border-purple-500 w-11/12 h-12 rounded-lg flex justify-center shadow-lg' value ={data.email}  onChange={(e)=>setdata({...data,email:e.target.value })} type="text" placeholder=' example@gmail.com'/>
                     </div>
                 </div>
                 <div className='bg-white w-full h-2/6'>
                 <label className='px-3'>Enter Your Password</label><br/>
                   <div className='flex justify-center w-full py-2 bg-white'>
                   <input className='w-10/12 h-12 rounded-lg flex justify-center  shadow-lg' id ='inputField' value={data.password} onChange={(e)=>setdata({...data,password:e.target.value })}  type={showPassword ? 'text' : 'password'} placeholder=' enter here'/><button onClick={passwordview} className='bg-purple-500 m-1 rounded-2xl hover:bg-purple-900' >{showPassword ? 'Hide' : 'Show'}  </button>
                   </div>
                 </div>
                 <div className='bg-white w-full h-2/6 flex justify-center  py-2'>
                 <button type="submit" onClick={login}className=' bg-purple-500 hover:bg-purple-900 w-11/12 h-12 rounded-2xl shadow-2xl'>Login</button>
                 </div>
                 <div className='flex justify-center py-2'>
                    <h6>Not a member ? <button className='text-purple-500 shadow-lg underline hover:scale-105 ' onClick={()=>navigate("/signup")}>Signup</button></h6>
                 </div>
                  
                 

              </div>
             </div>

         
        
        </div>    
    </>
  )
}
