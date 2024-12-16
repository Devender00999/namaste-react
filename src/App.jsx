import React, { lazy, Suspense, useState } from "react";
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/SigninPage";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
   const [userName, setUserName] = useState("Devender Kumar");

   return (
      <Provider store={appStore}>
         <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
               <Header />
               <Outlet />
            </div>
         </UserContext.Provider>
      </Provider>
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
         {
            path: "/grocery",
            element: (
               <Suspense fallback={<h1>Loading...</h1>}>
                  <Grocery />
               </Suspense>
            ),
         },
         {
            path: "/cart",
            element: <Cart />,
         },
         { path: "/signup", element: <SignupPage /> },
         { path: "/login", element: <LoginPage /> },
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
