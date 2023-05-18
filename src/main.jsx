import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import Errorpage from './components/Errorpage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
