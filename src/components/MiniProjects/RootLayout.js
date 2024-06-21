import React from 'react'
import GetData from './GetData'
import Navbar from './Navbar'
import './RootLayout.css'
function RootLayout() {
    
  return (
    <div className='container'>
      <Navbar/>
      <GetData />
    </div>
  );
}

export default RootLayout