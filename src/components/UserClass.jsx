import React, { Component } from "react";

class UserClass extends Component {
   constructor(props) {
      super(props);
      this.state = {
         userInfo: {
            name: "Dummy",
            location: "dummy location",
            avatar_url: "https://dummy.com",
         },
      };
      console.log(this.props.name + " constructor");
   }

   async componentDidMount() {
      console.log(this.props.name + " componentDidMount");
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();
      this.setState({ userInfo: json });
      // console.log(json);
   }

   render() {
      console.log(this.props.name + " render");
      const handleOnclick = () => {
         this.setState({ name: "Akshay" });
      };

      const { name, location, avatar_url } = this.state.userInfo;
      return (
         <div onClick={handleOnclick}>
            <img src={avatar_url} />
            <h1>Name: {name}</h1>
            <h1>location: {location}</h1>
         </div>
      );
   }
}

// Parent constructor
// Parent render
// First constructor
// First render
// Second constructor
// Second render
// First componentDidMount
// Second componentDidMount
// Parent componentDidMount

export default UserClass;
