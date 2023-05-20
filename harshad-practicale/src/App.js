import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Login from './component/Login';
import AddUser from './component/AddUser';
import UserTable from './component/UserTable';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/edituser:id' element={<AddUser />} />

        <Route path='/usertable' element={<UserTable />} />

    </Routes>
  </BrowserRouter>
  )
}

export default App