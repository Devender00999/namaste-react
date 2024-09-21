import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
   const [loginBtn, setLoginBtn] = useState("Login");
   const { loggedInUser } = useContext(UserContext);
   const isOnline = useOnlineStatus();

   const cart = useSelector((store) => store.cart.items);
   return (
      <nav className="flex items-center justify-between shadow-md mb-4 sticky top-0 bg-white">
         <div className="">
            <Link to="/">
               <img className="w-20" src={LOGO_URL} />
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
            <li
               className="nav-item"
               onClick={() => setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"))}
            >
               {loginBtn}
            </li>
            <li className="nav-item">{loggedInUser}</li>
         </ul>
      </nav>
   );
};

export default Header;
