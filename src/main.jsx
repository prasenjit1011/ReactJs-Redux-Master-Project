import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css'
import { App } from './App.jsx'
import { store } from './store/store.js';

import { Product } from './components/Product.jsx';
import { User } from './components/User.jsx';
import { AddProduct } from './components/Product.jsx';
import { AddUser } from './components/User.jsx';


const router = createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[
    { path:'/', element:<Product /> },
    { path:'/user', element:<User /> },
    { path:'/add/product', element:<AddProduct /> },
    { path:'/add/user', element:<AddUser /> },
  ]
}]);


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
