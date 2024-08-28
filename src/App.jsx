import React from "react";
import ReactDOM from "react-dom/client";
import "./components/Header";
import "./app.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
      </div>
   );
};

const router = createBrowserRouter([
   { path: "/", element: <AppLayout />, errorElement: <Error /> },
   { path: "/about", element: <About /> },
   { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// it will convert react element object to html element
root.render(<RouterProvider router={router} />);
