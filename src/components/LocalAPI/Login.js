import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { compareSync } from 'bcryptjs';
function Login() {
  let {register,handleSubmit} = useForm();
  let navigate = useNavigate()
  function onLoginForm(userObj){
      fetch(
          `http://localhost:4000/users?Username=${userObj.Username}`,
          {
            method:"GET"
          }
      )
      .then(
        (res=>res.json())
      )
      .then(
        (userArray) =>{
          if(userArray.length === 0){
            alert("Invalid UserName")
          }
          else{
            let res = compareSync(userObj.Password,userArray[0].Password)
            console.log(res)
            if(res === true){
              navigate('/Dashboard')
            }
            else{
              alert('Invalid Password')
            }
          }
        }
      )
  }
  return (
    <form style={{width:'600px'}} className='container bg-light p-5 mx-auto mt-5' onSubmit={handleSubmit(onLoginForm)} >
        <div className="form">
          <h1 className='display-5 text-center lead text-primary mb-5'>User Login form</h1>
          <div>
            <label htmlFor="Username" className='form-label'>User Name</label>
            <input type="text" {...register("Username")} className="form-control mb-4" placeholder='Enter Username here'/>
          </div>
          <div>
            <label htmlFor="Password" className='form-label'>Password</label>
            <input type="password" {...register("Password")} className="form-control mb-4" placeholder='Enter Password'/>
          </div>
          <div className='text-center mt-5'>
            <button style={{fontSize:'20px'}} type="submit" className="btn btn-success">Login</button>
          </div>
        </div>
    </form>
  )
}

export default Login