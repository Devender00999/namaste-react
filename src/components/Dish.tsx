import React from "react";
import { CDN_URL } from "../utils/constants";

const Dish = ({ dishInfo }) => {
   const { name, description, imageId, price, defaultPrice, id } = dishInfo;
   return (
      <div className="flex border-b-2 last:border-b-0 mb-10" key={id}>
         <div className="flex-1">
            <span>{name}</span>

            <span className="block">₹ {(price || defaultPrice) / 100}</span>
            <div>{description}</div>
         </div>
         <div className="flex-[0.3] h-[144px] w-[156px] ml-[60px]">
            <img className="rounded-xl" src={`${CDN_URL}/${imageId}`} />
         </div>
      </div>
   );
};

export default Dish;
