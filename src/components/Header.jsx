import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
   const [loginBtn, setLoginBtn] = useState("Login");
   console.log("Header rendered");
   return (
      <nav className="header">
         <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
         </div>
         <ul className="nav-container">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Contact Us</li>
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
