import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="text-center mt-5">
        <h1 className="display-3 text-success mb-3">Home</h1>
        <img
            style={{width:'200px'}}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJgqV5MLTUwAUUcpLzaL34cnyqIvF-KkpJew&usqp=CAU"
            className="mb-4"
            alt=""
        />
        <p style={{}} className="lead fs-2">
            Register to Enjoy all <br/>
        Resources  from this website!!
        </p>
        <p style={{fontSize:'25px',fontFamily:'serif'}} className='lead text-dark'>Click this to {' '}
          <Link to='Register'>
            Register
          </Link>
        </p>
    </div>
  )
}

export default Home