import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from '../../arsenal/src/Root.jsx';
import Home from '../../arsenal/src/Layouts/Home.jsx';
import Signin from '../../arsenal/src/Layouts/Signin.jsx';
import Signup from '../../arsenal/src/Layouts/Signup.jsx';
import AuthProvider from '../../arsenal/src/Auth_Provider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"",
        element: <Home></Home>
      },
      {
        path:"/Private",
        element: <PrivateRoute>
          <h1 className='text-4xl text-center font-semibold text-red-500'>This is the private route !</h1>
        </PrivateRoute>
      },
    ]
  },
  {
    path:"/Signin",
    element: <Signin></Signin>
  },
  {
    path:"/Signup",
    element: <Signup></Signup>
  },
  {
    path:"*",
    element: <h1 className='text-5xl font-bold text-center m-28'>Error 404 !</h1>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
