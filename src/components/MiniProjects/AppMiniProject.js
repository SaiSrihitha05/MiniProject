import React from 'react'
import RootLayout from './RootLayout';
import Product from './Product'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function AppMiniProject() {
  let router=createBrowserRouter([
    {
        path:'',
        element:<RootLayout/>,
        
    },
    {
      path:'product',
      element:<Product/>
    }
])
  return (
    
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default AppMiniProject