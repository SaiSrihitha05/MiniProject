import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-dark p-2'>
        <ul className='nav justify-content-end'>
            <li class="nav-item">
                 <Link style={{ fontFamily: 'Open Sans, sans-serif' }} class="nav-link active" to=''><p className='fs-3 text-light'>Home</p></Link>
            </li>
            <li class="nav-item">
                 <Link style={{ fontFamily: 'Open Sans, sans-serif' }} class="nav-link active" to='Register'><p className='fs-3 text-light'>Register</p></Link>
            </li>
            <li clLinkss="nav-item">
                 <Link style={{ fontFamily: 'Open Sans, sans-serif' }} class="nav-link active" to='Login'><p className='fs-3 text-light'>Login</p></Link>
            </li>
            <li class="nav-item">
                 <Link style={{ fontFamily: 'Open Sans, sans-serif' }} class="nav-link active" to='Dashboard'><p className='fs-3 text-light'>DashBoard</p></Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar