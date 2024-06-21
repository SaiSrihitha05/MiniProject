import React from 'react'

function Signin() {
  return (
    <div className="text-center">
        <h1 className="display-2 text-info bg-dark p-2">Signin</h1>
        <div className="form">
            <input style={{ width:'500px'}} type="text" className="form-control mx-auto mt-5" placeholder='Username'/>
            <input style={{ width:'500px'}} type="text" className="form-control mx-auto mt-4" placeholder='Password'/>
            <button className="btn btn-success mt-4">SignIn </button>
        </div>
    </div>

  );
}
export default Signin