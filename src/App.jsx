import React from "react";
import ReactDOM from "react-dom/client";
import "./components/Header";
import "./app.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Outlet />
      </div>
   );
};

const router = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />,
      children: [
         { path: "/", element: <Body /> },
         { path: "/about", element: <About /> },
         { path: "/restaurants/:resId", element: <RestaurantMenu></RestaurantMenu> },
         { path: "/contact", element: <Contact /> },
      ],
      errorElement: <Error />,
   },
   {
      path: "/restaurants/:resId",
      element: <RestaurantMenu></RestaurantMenu>,
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// it will convert react element object to html element
root.render(<RouterProvider router={router} />);
