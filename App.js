import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

/* 
   Header 
      - Logo
      - Nav Items
   Body
      - Search bar
      - RestaurantContainer
         - RestaurantCard
   Footer
      - Copyright
      - Links
      - Address
      - Contact
*/

const Header = () => {
   return (
      <nav className="header">
         <div className="logo-container">
            <img
               className="logo"
               src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
            />
         </div>
         <ul className="nav-container">
            <li className="nav-item">Home</li>
            <li className="nav-item">About Us</li>
            <li className="nav-item">Contact Us</li>
            <li className="nav-item">Cart</li>
         </ul>
      </nav>
   );
};

const AppLayout = () => {
   return (
      <div className="app">
         <Header></Header>
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// it will convert react element object to html element
root.render(<AppLayout />);
