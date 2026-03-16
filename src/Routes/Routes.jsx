import React from "react";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, } from "react-router";
import Root from "../pages/Roots/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/bookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
export const router = createBrowserRouter([
  {
    path: "/",

    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            Component: Home,
            loader: ()=>fetch("/data.json"),
        },
        {
          path: '/about',
          Component: About,
        },
        {
          path: "/bookDetails/:id",
                      loader: ()=>fetch("/data.json"),

          Component: BookDetails,
        },
        {
          path: "/readlist",
          Component: ReadList,
          loader: ()=>fetch("/data.json"),
        }
    ]

  },
]);


// export router;