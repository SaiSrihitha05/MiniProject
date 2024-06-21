import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className=''>
        <ul className='nav justify-content-end'>
            <li class="nav-item">
                 <Link class="nav-link active" to=''><p className='display-6 text-dark'>Home</p></Link>
            </li>
            <li class="nav-item">
                 <Link class="nav-link active" to='Signup'><p className='display-6 text-dark'>Signup</p></Link>
            </li>
            <li clLinkss="nav-item">
                 <Link class="nav-link active" to='Signin'><p className='display-6 text-dark'>Signin</p></Link>
            </li>
            <li class="nav-item">
                 <Link class="nav-link active" to='Technologies'><p className='display-6 text-dark'>Technologies</p></Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar