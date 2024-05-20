

import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Singup from './Singup';
import Loging from './pag/Loging';

import { useEffect, useState } from 'react';
import Remove from './pag/Remove';
import Newuser from './pag/Newuser';
import Error from './pag/Error';


function App() {

  const [token, settoken] = useState();
useEffect( () => {
  const api=async()=>{
    const token= await localStorage.getItem("token1")
    settoken(token)
  }
api()
}, []);
  console.log("tjoken",);
 
  return (
<>

<BrowserRouter>
<Routes>
<Route path="/*" element={<Error />} />

  <Route path="/sin" element={<Singup />} />
  <Route path="/loging" element={<Loging />} />

  <Route path="/sin" element={<Singup />} />
  <Route path="/loging" element={<Loging />} />


</Routes>
</BrowserRouter>

<ToastContainer/>

</>
  );
}

export default App;
