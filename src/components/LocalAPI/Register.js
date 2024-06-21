import React from "react";
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {hashSync} from 'bcryptjs'

function Register() {

  let {register,handleSubmit}=useForm()
  let navigate=useNavigate()

  function onRegisterFormSubmit(userObj){

    let hashedPassword=hashSync(userObj.Password,5)
    userObj.Password=hashedPassword;
    
    fetch('http://localhost:4000/users',{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify(userObj)
    })
    .then(res=>{
      if(res.status===201){
        navigate('/login')
      }
    })
    .catch(err=>console.log(err))

  }

  return (
    <form style={{width:'600px'}} className='container bg-light p-5 mx-auto mt-5' onSubmit={handleSubmit(onRegisterFormSubmit)}>
        <div className="form">
          <h1 className='display-5 text-center lead text-primary mb-5'>User Registration form</h1>
          <div>
            <label htmlFor="Username" className='form-label'>User Name</label>
            <input type="text" {...register("Username")} className="form-control mb-4" placeholder='Enter Username here'/>
          </div>
          <div>
            <label htmlFor="Password" className='form-label'>Password</label>
            <input type="password" {...register("Password")} className="form-control mb-4" placeholder='Enter Password'/>
          </div>
          <div>
            <label htmlFor="Email" className='form-label'>Email</label>
            <input type="email" {...register("Email")} className="form-control mb-4" placeholder='Enter Email'/>
          </div>
          <div className='text-center mt-5'>
            <button style={{fontSize:'20px'}} className="btn btn-success">Register</button>
          </div>
        </div>
    </form>
  )
}

export default Register