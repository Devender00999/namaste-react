import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Dish from "./Dish";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {
   const cartItems = useSelector((store) => store.cart.items);

   const dispatch = useDispatch();

   const handleClearCart = () => {
      dispatch(clearCart());
   };

   return (
      <div className="my-3 w-4/6 m-auto">
         <div className="flex items-center justify-between w-100%">
            <h1 className="text-2xl font-bold">Cart</h1>
            {cartItems?.length !== 0 && (
               <button
                  onClick={handleClearCart}
                  className="border-gray-200 hover:bg-gray-100 rounded-lg border-2 px-4 py-[5px]"
               >
                  Clear
               </button>
            )}
         </div>
         {cartItems?.length === 0 ? (
            <h1>No Items in the cart</h1>
         ) : (
            <div>
               {cartItems.map((item) => {
                  return <Dish dishInfo={item} key={item.id} />;
               })}
            </div>
         )}
      </div>
   );
};

export default Cart;
