import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Root from './Components/Layout/Root.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import './Components/Navbar/Navbar.jsx'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      {
    
        index:true,
        Component:Home
      },
      {
        path:'/login',
        Component: Login
      },
      {
        path:'/signup',
        Component: Signup
      }
    ]        
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
