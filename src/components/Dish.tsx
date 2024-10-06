import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";

const Dish = ({ dishInfo }) => {
   const { name, description, imageId, price, defaultPrice, id } = dishInfo;
   const dispatch = useDispatch();

   const handleAddItemtoCart = () => {
      dispatch(addItem(dishInfo));
   };
   return (
      <div className="flex border-b-2 last:border-b-0 mb-10 pb-10" key={id} data-testid="food-item">
         <div className="flex-1">
            <span>{name}</span>

            <span className="block">₹ {(price || defaultPrice) / 100}</span>
            {description && <div>{description}</div>}
         </div>
         <div className="flex-[0.3] w-[156px] ml-[60px] flex flex-col items-center">
            {imageId && (
               <img className="h-[144px] w-[156px] rounded-xl" src={`${CDN_URL}/${imageId}`} />
            )}
            <button
               onClick={handleAddItemtoCart}
               className="-mt-5 px-5 z-50 w-[120px] py-2 rounded-lg border-[#02060c26] border-[1px] text-[rgb(27,166,114)] uppercase font-semibold bg-white hover:bg-[#eeeff1]"
            >
               Add
            </button>
         </div>
      </div>
   );
};

export default Dish;
