import React, { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

export default class About extends Component {
   constructor(props) {
      super(props);
      // console.log("Parent constructor");
   }

   componentDidMount() {
      // console.log("Parent componentDidMount");
      this.timer = setInterval(() => {
         console.log("Inside componentDidMount");
      }, 1000);
   }

   componentWillUnmount() {
      clearInterval(this.timer);
   }

   render() {
      // console.log("Parent render");
      return (
         <div>
            <UserContext.Consumer>{(user) => user.loggedInUser}</UserContext.Consumer>
            <UserClass />
         </div>
      );
   }
}
