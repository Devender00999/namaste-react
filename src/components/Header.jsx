import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
   const [loginBtn, setLoginBtn] = useState("Login");
   return (
      <nav className="header">
         <div className="logo-container">
            <Link to="/">
               <img className="logo" src={LOGO_URL} />
            </Link>
         </div>
         <ul className="nav-container">
            <li className="nav-item">
               <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
               <Link to="/about">About Us</Link>
            </li>
            <li className="nav-items">
               <Link to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">Cart</li>
            <li
               className="nav-item"
               onClick={() => setLoginBtn((prev) => (prev === "Login" ? "Logout" : "Login"))}
            >
               {loginBtn}
            </li>
         </ul>
      </nav>
   );
};

export default Header;
