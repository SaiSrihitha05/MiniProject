
function Signup() {
  return (
    <div className="text-center">
        <h1 className="display-2 text-info bg-dark p-2">SignUp</h1>
        <div className="form">
            <input style={{ width:'500px'}} type="text" className="form-control mx-auto mt-5 p-2" placeholder='Username'/>
            <input style={{ width:'500px'}} type="text" className="form-control mx-auto mt-4 p-2" placeholder='Password'/>
        </div>
        <h1 className="display-6 mt-3">Already have an account</h1>
        <button style={{fontSize:'20px',width:'400px'}} className="btn btn-success bg-secondary mx-auto p-2 m-4 d-block">Continue with Google</button >
        <button className="btn btn-success mt-4" >SignUp </button>
        
    </div>
  )
}

export default Signup