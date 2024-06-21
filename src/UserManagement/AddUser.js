
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import UsersList from './UsersList';

function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);

  const onRegisterSubmit = (userObj) => {
    setUsers([...users, userObj]);
  };

  return (
    <div className='container'>
      <form className='w-50 mx-auto mt-5 border p-4 bg-light' onSubmit={handleSubmit(onRegisterSubmit)} >
        <p className="display-6 text-center text-info">User Registration</p>
        <div>
          <label htmlFor="username">User Name</label>
          <input type="text" {...register('username', { required: true, minLength: 4, maxLength: 8 })} id='username' className="form-control mb-4" />
        </div>
        {errors.username?.type === "required" && (
          <p className="text-danger">Username is required</p>
        )}
        {errors.username?.type === "minLength" && (
          <p className="text-danger">Min length is 4 characters</p>
        )}
        {errors.username?.type === "maxLength" && (
          <p className="text-danger">Max length is 8 characters</p>
        )}
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            {...register('dob', { required: true })}
            name="dob"
            id="dob"
            className="form-control mb-4"
          />
        </div>
        {errors.dob?.type === "required" && (
          <p className="text-danger">Date of Birth is required</p>
        )}
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            {...register('city', { required: true })}
            id='city'
            className="form-control mb-4"
          />
        </div>
        {errors.city?.type === "required" && (
          <p className="text-danger">City is required</p>
        )}
        <div>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
      <UsersList users={users} />
    </div>
  );
}

export default AddUser;
