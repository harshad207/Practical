import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
  let  navigate=useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
        let token= localStorage.getItem("userToken")
        console.log('token',token);
        axios.post("https://api.bharuch-health.com/user/add",data ,{
            headers: {
              "authorization":""+ token ,
            }
           }) .then((res)=>{
console.log("res",res);

navigate('/usertable')
}).catch((err)=>{console.log("err",err);})
    }
  return (
    <>

    <div>AddUser</div>
    <div className='App'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <lable>First Name: </lable>
      <input  {...register("first_name",{ required: true })} /><br/>
      {errors.first_name && <span>This field is required</span>}
        </div>

        <div style={{marginTop:"30px"}}>
      <lable>Middle Name: </lable>
      <input {...register("middle_name", { required: true })} /><br/>
      {errors.middle_name && <span>This field is required</span>}
      </div>
      <div style={{marginTop:"30px"}}> 
        <lable>Last Name: </lable>
      <input  {...register("last_name",{ required: true })} /><br/>
      {errors.last_name && <span>This field is required</span>}
        </div>
        <div style={{marginTop:"30px"}}>
        <lable>Email: </lable>
      <input  {...register("email",{ required: true })} /><br/>
      {errors.email && <span>This field is required</span>}
        </div>
        <div style={{marginTop:"30px"}}>
        <lable>Mobile: </lable>
      <input  {...register("mobile",{ required: true })} /><br/>
      {errors.mobile && <span>This field is required</span>}
        </div>
        <div style={{marginTop:"30px"}}>
        <lable>Password: </lable>
      <input  {...register("password",{ required: true })} /><br/>
      {errors.password && <span>This field is required</span>}
        </div>
        <div style={{marginTop:"30px"}}> 
        <lable>Role: </lable>
      <input defaultValue="6458a0d7265263c3358c8e3a"  {...register("role",)} /><br/>
      {errors.role && <span>This field is required</span>}
        </div>
        <div style={{marginTop:"30px"}}>
        <lable>PHC Id: </lable>
      <input defaultValue="644fbd2e2dfb6e46e7b9f9a2"  {...register("phcid")} /><br/>
      {errors.phcid && <span>This field is required</span>}
        </div>
      
      <input type="submit" style={{marginTop:'20px'}} />
    </form>
    </div>
    </>
  )
}

export default AddUser