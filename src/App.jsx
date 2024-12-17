import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./app.css";
import About from "./components/About";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/Error";
import "./components/Header";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";

import LoginPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import { FirebaseProvider } from "./utils/FirebaseContext";
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
   const [userName, setUserName] = useState("Devender Kumar");

   return (
      <Provider store={appStore}>
         <FirebaseProvider>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
               <div className="app min-h-[100vh] flex flex-col">
                  <Header />
                  <div className="flex-1">
                     <Outlet />
                  </div>
               </div>
            </UserContext.Provider>
         </FirebaseProvider>
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
