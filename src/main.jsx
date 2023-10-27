import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import Login from './components/SharedPage/Login/Login';
import SignUp from './components/SharedPage/SignUp/SignUp';
import AuthProvider from './Route/Provider/AuthProvider';
import CheckOut from './components/SharedPage/CheckOut/CheckOut';
import Checking from './components/SharedPage/CheckOut/Checking/Checking';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path:'checkout/:id',
        element: <CheckOut></CheckOut>,
        loader:({params}) => fetch(`http://localhost:5001/services/${params.id}`)
      },
      {
        path: 'checking',
        element: <Checking></Checking>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
  </div>
)
