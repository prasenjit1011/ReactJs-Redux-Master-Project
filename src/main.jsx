import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'

import Listing from './components/Listing'
import Details from './components/Details'
import './index.css'

const router = createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[
    { path:'/', element:<Listing />},
    { path:'/details', element:<Details />}
  ]
}]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
