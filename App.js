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
            - Image
            - Name of Res, Star Rating, Cuisine, delivery time
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

const RestaurantCard = () => {
   return (
      <div className="res-card">
         <img
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf"
         />
         <h3> Meghna Foods</h3>
         <h4> Biryani, North Indian, Asian</h4>
         <h4> 4.4 Stars</h4>
         <h4> 38 Minutes</h4>
      </div>
   );
};

const Body = () => {
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
         </div>
      </div>
   );
};

const AppLayout = () => {
   return (
      <div className="app">
         <Header></Header>
         <Body />
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// it will convert react element object to html element
root.render(<AppLayout />);
