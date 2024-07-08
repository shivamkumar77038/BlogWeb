import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux'
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Home from './components/Home';
import Blogform from './components/blogform/Blogform';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromChildren,
} from "react-router-dom";
import Readpost from './components/allposts/Readpost';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<App/>} >
      <Route path='/' element={<Home/>} />
       
       <Route path='/signup' element={<Signup/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/addform' element={<Blogform/>} />
       <Route path='/readpost' element={<Readpost/>}/>
       </Route>
  )
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    < Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
  </React.StrictMode>
);


reportWebVitals();
