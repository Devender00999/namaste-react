import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { useFirebase } from "../utils/FirebaseContext";

const Header = () => {
   const { user, logout } = useFirebase();
   const isOnline = useOnlineStatus();

   const cart = useSelector((store) => store.cart.items);
   return (
      <nav className="flex h-16 items-center justify-between shadow-md sticky top-0 bg-white">
         <div className="">
            <Link to="/">
               <img className="w-16" src={LOGO_URL} />
            </Link>
         </div>
         <ul className="flex gap-4 mr-4">
            <li className="nav-item">{isOnline ? "✅ Online" : "❌ Offline"}</li>
            <li className="nav-item">
               <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
               <Link to="/about">About Us</Link>
            </li>
            <li className="nav-items">
               <Link to="/contact">Contact Us</Link>
            </li>
            <li className="nav-items">
               <Link to="/grocery">Grocery</Link>
            </li>
            <li className="nav-item font-semibold">
               <Link to="/cart">Cart ({cart?.length || 0})</Link>
            </li>
            <li className="nav-item">
               {user ? (
                  <button onClick={() => logout()}>Logout</button>
               ) : (
                  <Link to={"/login"}>Login</Link>
               )}
            </li>
            {user && <li className="nav-item">{user?.displayName ?? user?.email}</li>}
         </ul>
      </nav>
   );
};

export default Header;
