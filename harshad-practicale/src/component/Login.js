import React from 'react'
import { useForm } from "react-hook-form";
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  let  navigate=useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
axios.post("https://api.bharuch-health.com/login ",data).then((res)=>{
console.log("res",res);
console.log("res token",res.data.result.token);
localStorage.setItem("userToken", res.data.result.token);
    navigate('/home')
}).catch((err)=>{console.log("err",err);})
  };
  return (
    <>
    <div className='App'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <lable>Email: </lable>
      <input  {...register("email",{ required: true })} /><br/>
      {errors.email && <span>This field is required</span>}

        </div>
        <div style={{marginTop:"30px"}}>
      <lable>Password: </lable>
      
      <input {...register("password", { required: true })} /><br/>
      {errors.password && <span>This field is required</span>}
      </div>
      
      <input type="submit" style={{marginTop:'20px'}} />
    </form>
    </div>
    </>
  )
}

export default Login