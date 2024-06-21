import React from 'react'
import RootLayout from './components/MiniProjects/RootLayout';
import Product from './components/MiniProjects/Product';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
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

export default App