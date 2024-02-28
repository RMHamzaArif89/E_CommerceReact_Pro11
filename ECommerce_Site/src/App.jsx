import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Nav from './components/navbar/Nav'
import Home from './components/home/Home'
import Women from './components/pages/women/Women';
import Kids from './components/pages/kids/Kids';
import Men from './components/pages/men/Men';
import Login from './components/login/login';
import Nopage from './components/nopage/Nopage';

function App() {

  return(
    <>

<BrowserRouter>
<Nav/>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Nopage />} />
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
