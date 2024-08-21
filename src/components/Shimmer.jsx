import React from "react";

const Shimmer = ({ classNames }) => (
   <div className={"shimmer h-10 w-full bg-gray-300 rounded " + classNames}></div>
);

export default Shimmer;
