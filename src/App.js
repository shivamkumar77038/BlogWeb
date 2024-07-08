
 import {Outlet} from "react-router-dom"
 import Footer from './components/footer/Footer';
 import Header from './components/header/Header';
 import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginbtn, logoutbtn } from "./store/authSlice";
import { useSelector } from "react-redux";


function App() {
 
  const get = localStorage.getItem("cookieFallback");

  const state = useSelector((state)=>state.auth.status);
  const dispatch = useDispatch();
   useEffect(()=>{
  get ? dispatch( loginbtn()): dispatch(logoutbtn());
   },[dispatch,get,state]);
 
  return(
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  );
}

export default App;
