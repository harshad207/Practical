import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let  navigate=useNavigate()

  return (
    <>

    <Button variant="contained" color="success" onClick={()=>{navigate("/adduser")}}>
  Add User
</Button>
<div>Home</div>
<Button variant="contained" color="success" onClick={()=>{navigate("/usertable")}}>
 go to user table
</Button>
    </>
   
  )
}

export default Home