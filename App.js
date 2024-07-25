import React from "react";
import ReactDOM from "react-dom/client";

// JSX - HTML like or xml like syntax
const jsxHeading = (
   <h1 className="heading" id="hello">
      Namste React using JSX 🚀{" "}
   </h1>
);

// React funcitonal component
const Title = (d) => {
   console.log(d);
   return <h1>Title 🚀</h1>;
};

const Heading = () => {
   return React.createElement("h1", {}, "Hello World Heading.");
};

const Container = () => {
   return (
      <div>
         {jsxHeading}
         {Title((d = "hello world"))}
         <Title />
         <Heading />
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// it will convert react element object to html element
root.render(<Container />);
