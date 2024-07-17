import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
   React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "heading", key: 1 }, "Hello World from React! 🚀"),
      React.createElement("h2", { id: "heading2", key: 2 }, "Namaste!"),
   ]),
   ,
   React.createElement("div", { id: "child2" }, [
      React.createElement("h1", { id: "heading", key: 1 }, "Hello World from React!!"),
      React.createElement("h2", { id: "heading2", key: 2 }, "Namaste!"),
   ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
