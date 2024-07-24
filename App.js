import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML like or xml like syntax
const jsxHeading = (
   <h1 className="heading" id="hello">
      Namste React using JSX 🚀{" "}
   </h1>
);

// React funcitonal component
const Title = () => {
   return <h1>Hello from Functional Component 🚀</h1>;
};

const Heading = () => {
   return React.createElement("h1", {}, "Hello World");
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// it will convert react element object to html element
root.render(<Heading />);
