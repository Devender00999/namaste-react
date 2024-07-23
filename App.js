import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML like or xml like syntax
const jsxHeading = (
   <h1 className="heading" id="hello">
      Namste React using JSX 🚀{" "}
   </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// it will convert react element object to html element
root.render(jsxHeading);
