import React from "react";
import { CDN_URL } from "../utils/constants";

const Dish = ({ dishInfo }) => {
   const { name, description, imageId, price, defaultPrice } = dishInfo;
   return (
      <div className="flex">
         <div className="flex-1">
            <span>{name}</span>

            <span className="block">₹ {(price || defaultPrice) / 100}</span>
            <div>{description}</div>
         </div>
         <div className="flex-[0.3] h-[144px] w-[156px] ml-[60px]">
            <img src={`${CDN_URL}/${imageId}`} />
         </div>
      </div>
   );
};

export default Dish;
