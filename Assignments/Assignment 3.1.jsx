import React from "react";
import ReactDOM from "react-dom";

// part 1
const heading = React.createElement("div", {}, [
   React.createElement("h1", {}, "Heading 1"),
   React.createElement("h2", {}, "Heading 2"),
   React.createElement("h3", {}, "Heading 3"),
]);

// part 2
const headingJSX = (
   <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
   </div>
);

// part 3 and 4
const Title = () => <div>Title</div>;
const Heading = () => (
   <div>
      {<Title />}
      <h1 style={{ color: "red" }}>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
   </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading());
