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
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import ViewDetailsCard from './Pages/ViewDetailsCard/ViewDetailsCard.jsx';
import AddToy from './Pages/AddToy/AddToy.jsx';
import BookingsAllToy from './Pages/BookingsAllToy/BookingsAllToy.jsx';

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
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addToy/:id',
        element:<AddToy></AddToy>
      },
      {
        path:'/allToys',
        element:<BookingsAllToy></BookingsAllToy>

      },
      {
        path:'/viewDetailsCard/:id',
        element:<ViewDetailsCard></ViewDetailsCard>,
        loader:({params})=> fetch(`http://localhost:5000/viewDetailsCard/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> <RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
