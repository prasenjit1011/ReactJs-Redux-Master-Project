import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Listing from './components/Listing'
import Details from './components/Details'
import { Login } from './components/admin/Login.jsx'
import Dashboard from './components/admin/Dashboard.jsx'
import { Errorpage } from './components/Errorpage.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App />,
  errorElement:<Errorpage />,
  children:[
    { path:'/', element:<Listing />},
    { path:'/details/:id', element:<Details />},
    { path:'/admin', element:<Login />},
    { path:'/admin/dashboard', element:<Dashboard />},
  ]
}]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
