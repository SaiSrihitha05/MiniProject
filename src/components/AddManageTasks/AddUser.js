
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function AddUser(props) {
  let { register, handleSubmit } = useForm();
  let [userExists,setUserExists] = useState(false) 
  
  function onRegisterSubmit(userObj){
    let stat = props.users.some(user=>user.newUser === userObj.newUser)
    if(stat){
      
        setUserExists(true);
        <p>This username is already used</p>
    }
    else{
      setUserExists(false)
      props.setUsers([...props.users, userObj]);
    }
    
  };

  
  return (
    <div className='container m-5'>
      <form className=' mx-auto mt-5 border p-4 bg-light' onSubmit={handleSubmit(onRegisterSubmit)} >
        <p className="display-6 text-center text-info">Add User</p>
        <div>
          <label htmlFor="newUser">User</label>
          <input type="text" {...register('newUser', { required: true})} id='newUser' className="form-control mb-4" />
        </div>
        {userExists && <p style={{fontSize:'17px'}} className='text-danger'>This username is already used.Try with another one</p>}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register('email', { required: true})} id='email' className="form-control mb-4" />
        </div>
        
          <button className="btn btn-success" type="submit" >
            Add
          </button>
        
      </form>
    </div>
  );
}

export default AddUser;
