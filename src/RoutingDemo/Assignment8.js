import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Home'
import Signin from './Signin'
import Signup from './Signup'
import Technologies from './Technologies'
import RootLayout from './RootLayout'
import Rjs from './Rjs'
import Angular from './Angular'
import Vue from './Vue'
import Error from './Error'

function Assignment8() {
    let router = createBrowserRouter([
        {
          path:'',
          element:<RootLayout />,
          errorElement:<Error/>,
          children:[
            {
              path:'',
              element:<Home />
            },
            {
              path:'signup',
              element:<Signup />
            },
            {
              path:'signin',
              element:<Signin />
            },
            {
              path:'technologies',
              element:<Technologies />,
              children:[{
                path:'Rjs',
                element:<Rjs />
              },
              {
                path:'Angular',
                element:<Angular />
              },
              {
                path:'Vue',
                element:<Vue />
              }]
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

export default Assignment8