import React, { useState } from "react";
import Dish from "./Dish";

const RestaurantCategory = ({ data }) => {
   const [isCollapsed, setIsCollapsed] = useState(false);
   return (
      <div className="flex flex-col gap-4 border-b-[1.5rem]">
         {/* {Header} */}
         {/* Accordian Body */}
         <div className="font-bold flex justify-between py-4 ">
            <span>
               {data.title} ({data.itemCards?.length || 0})
            </span>
            <span className="cursor-pointer" onClick={() => setIsCollapsed((prev) => !prev)}>
               ⬇️
            </span>
         </div>
         {!isCollapsed && (
            <div className="">
               {data.itemCards?.map((menu) => (
                  <Dish dishInfo={menu?.card?.info} key={menu?.card?.info?.id} />
               ))}
            </div>
         )}
      </div>
   );
};

export default RestaurantCategory;
