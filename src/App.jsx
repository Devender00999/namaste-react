import React from "react";
import ReactDOM from "react-dom/client";
import "./components/Header";
import "./app.css";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// it will convert react element object to html element
root.render(<AppLayout />);
