import React from 'react';
import { useForm } from 'react-hook-form';

function Assignment10() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onRegisterFormSubmit(userObj) {
    // Add your form submission logic here
    console.log(userObj);
  }

  return (
    <form style={{ width: '600px' }} className='container bg-light p-5 mx-auto mt-5 ' onSubmit={handleSubmit(onRegisterFormSubmit)}>
      <h1 className='display-6 text-center lead text-primary mb-5'>Registration form</h1>
      <div className="row">
        <div className="col-md-6">
          <div>
            <label htmlFor="FirstName" className='form-label'>First Name</label>
            <input type="text" {...register("FirstName", { required: true, minLength: 4, maxLength: 6 })} className="form-control mb-4" />
          </div>
          {errors.FirstName?.type === "required" && (
            <p className="text-danger">First Name is required</p>
          )}
          {errors.FirstName?.type === "minLength" && (
            <p className="text-danger">Min Length should be 4</p>
          )}
          {errors.FirstName?.type === "maxLength" && (
            <p className="text-danger">Max Length should be 6</p>
          )}
        </div>
        <div className="col-md-6">
          <div>
            <label htmlFor="LastName" className='form-label'>Last Name</label>
            <input type="text" {...register("LastName", { required: true, minLength: 4, maxLength: 6 })} className="form-control mb-4" />
          </div>
          {errors.LastName?.type === "required" && (
            <p className="text-danger">Last Name is required</p>
          )}
          {errors.LastName?.type === "minLength" && (
            <p className="text-danger">Min Length should be 4</p>
          )}
          {errors.LastName?.type === "maxLength" && (
            <p className="text-danger">Max Length should be 6</p>
          )}
        </div>
      </div>
      <div className="row">
      <div className="col-md-6">
      <div>
        <label htmlFor="Birthday" className='form-label'>Birthday</label>
        <input type="date" {...register("Birthday", { required: true })} className="form-control mb-4" />
      </div>
      {errors.Birthday?.type === "required" && (
        <p className="text-danger">Birthday is required</p>
      )}
      </div>
      <div className="col-md-6">
        <div>
          <label className='mb-2'>Gender</label>
          <div className="row">
            <div className="col-md-6">
          <div className="form-check">
            <input type="radio" id="m" className="form-check-input" value="male" {...register("gender", { required: true })} />
            <label htmlFor="m" className="form-check-label">Male</label>
          </div>
          </div>
          <div className="col-md-6">
          <div className="form-check">
            <input type="radio" id="f" className="form-check-input" value="female" {...register("gender", { required: true })} />
            <label htmlFor="f" className="form-check-label">Female</label>
          </div>
          </div>
          </div>
        </div>
        {errors.gender?.type === "required" && (
          <p className='text-danger mt-2'>This field is required</p>
        )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
      <div>
        <label htmlFor="Email" className='form-label'>Email</label>
        <input type="email" {...register("Email", { required: true })} className="form-control mb-4" />
      </div>
      {errors.Email?.type === "required" && (
        <p className="text-danger">Email is required</p>
      )}
      </div>
      <div className="col-md-6">
      <div>
        <label htmlFor="Phone" className='form-label'>Phone No</label>
        <input type="number" {...register("Phone", { required: true, minLength: 10, maxLength: 10 })} className="form-control mb-4" />
      </div>
      {errors.Phone?.type === "required" && (
        <p className="text-danger">PhoneNo is required</p>
      )}
      {errors.Phone?.type === "maxLength" && (
        <p className="text-danger">Length should be 10</p>
      )}
      {errors.Phone?.type === "minLength" && (
        <p className="text-danger">Length should be 10</p>
      )}
      </div>
      </div>
      
      <div className="mb-3">
        <label htmlFor="subject" className='mb-2'>Select state</label>
        <select id="subject" className="form-select" {...register('subject', { required: true })} defaultValue="">
          <option value="" disabled>Choose any subject</option>
          <option value="maths">Maths</option>
          <option value="phy">Physics</option>
          <option value="chem">Chemistry</option>
        </select>
      </div>
      {errors.subject?.type === "required" && (
        <p className="text-danger">Please select any subject</p>
      )}
      <div className='mt-5'>
        <button style={{ fontSize: '20px' }} className="btn btn-success" type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Assignment10;
