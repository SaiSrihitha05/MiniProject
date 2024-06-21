import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div style={{minHeight:'100vh',fontFamily:'revert'}}>
      <h1 className="text-center text-danger display-5 mt-5">
        This is Dashboard where<br/> you can find all your details
      </h1>
      <Outlet/>
    </div>
  )
}

export default Dashboard