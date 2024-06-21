import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
function Assignment9() {
    let router = createBrowserRouter([
        {
            path:"",
            element:<RootLayout/>,
            children:[
                {
                    path:"",
                    element:<Home/>
                },
                {
                    path:"login",
                    element:<Login/>
                },
                {
                    path:"register",
                    element:<Register/>
                },
                {
                    path:"dashboard",
                    element:<Dashboard/>
                }
            ]
        }
    ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Assignment9