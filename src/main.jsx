import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./Pages/Home/Home/Home.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import Errorpage from "./components/Errorpage.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import ViewDetailsCard from "./Pages/ViewDetailsCard/ViewDetailsCard.jsx";
import AddToy from "./Pages/AddToy/AddToy.jsx";
import BookingsAllToy from "./Pages/BookingsAllToy/BookingsAllToy.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import UpdateToy from "./Pages/UpdateToy/UpdateToy.jsx";
import MyToys from "./Pages/MyToys/MyToys";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addToy/:id",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path:"/updateToy",
        element:<UpdateToy></UpdateToy>

      },  
      {
        path:'myToys',
        element:<MyToys></MyToys>
      },  
      {
        path: "/allToys",
        element: (
          <PrivateRoute>
            <BookingsAllToy></BookingsAllToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewDetailsCard/:id",
        element: (
          <PrivateRoute>
            <ViewDetailsCard></ViewDetailsCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/viewDetailsCard/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
