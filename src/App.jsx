import React from 'react'
import DashBoard from './Component/Dashboard'
import Login from './Component/Login'

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  
  return (
    <>  

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>


    </>
  )
}














