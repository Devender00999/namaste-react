import React, { Component } from "react";
import UserClass from "./UserClass";

export default class About extends Component {
   constructor(props) {
      super(props);
      console.log("Parent constructor");
   }

   componentDidMount() {
      console.log("Parent componentDidMount");
   }
   render() {
      console.log("Parent render");
      return (
         <div>
            <UserClass name="First" />
            <UserClass name="Second" />
         </div>
      );
   }
}
