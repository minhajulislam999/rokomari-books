import React from "react";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, } from "react-router";
import Root from "../pages/Roots/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",

    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            Component: Home
        }
    ]

  },
]);


// export router;