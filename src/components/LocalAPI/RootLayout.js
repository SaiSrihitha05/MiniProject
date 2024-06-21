import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div >
        <Navbar />
        <div style={{minHeight:'100vh'}}>
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout