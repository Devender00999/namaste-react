import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
   const [loginBtn, setLoginBtn] = useState("Login");
   const { loggedInUser } = useContext(UserContext);
   const isOnline = useOnlineStatus();
   return (
      <nav className="flex items-center justify-between shadow-md mb-4">
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
            <li className="nav-item">Cart</li>
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
