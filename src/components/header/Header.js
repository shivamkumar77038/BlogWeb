import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { logoutbtn} from '../../store/authSlice'
import { account } from '../../appwrite/auth'
import { useNavigate } from 'react-router-dom'






export default function Header() {
  const Authstatus = useSelector((state) =>state.auth.status )
 const dispatch = useDispatch();
 const navigate = useNavigate();
 


    const navItems = [
        {name:"Home",
          slug:"/",
          status: true
        },
        {
          name:"Login",
          status:!Authstatus,
          slug:"/login"
       },
        {name:"Signup",
          slug:"/signup",
          status:true
        },
        

        
      
      ]
     
      const logout =  async()=>{
        try {
          dispatch(logoutbtn());
          localStorage.clear();
          navigate('/')
         await account.deleteSessions();
            dispatch(logoutbtn());
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

    const addpost=()=>{
      if(Authstatus===true){ 
        navigate("/addform")
      }else{
        alert("Please login to add post")
      navigate("/login")
    }

    }

    
    
  
      return (
        <>
         <div className=' font-serif  fixed inset-x-0 top-0 max-w-full bg-purple-400 shadow-lg hover:shadow-2xl    sm: h-auto'>
          <div className='flex flex-row  sm:p-auto  '>
             <div className='w-auto py-2 font-bold sm:p-auto bg-purple-500 rounded-r-lg'>BLOGWEB</div>
          <div className=' h-auto p-auto md: p-auto mx-7 flex justify-evenly align-middle    : text-sm  sm: flex-auto sm:text-base ' >
            
            {navItems.map((item)=>(
               item.status===true ? <button onClick={()=>navigate(item.slug)} key={item.name} className='bg-purple-400 py-auto mx-2 md:mx-10 hover:text-white hover:scale-105 '>{ item.name}</button> : null
            ))}
            <div className='px-3'><button className="w-auto p-2  sm:p-auto hover:text-white hover:scale-105"onClick={addpost}>Add</button></div>
            <div >
              {Authstatus===true ? <button  onClick={logout}  className='align-middle  w-auto py-2 font-normal sm:p-auto bg-purple-500 rounded-b-lg hover:text-white hover:scale-105'> Logout </button>:null}
            </div>

          </div>
          </div>
             
         </div>
           
        </>
      );
  
}
