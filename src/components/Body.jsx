import RestaurantCard from "./RestaurantCard";
import { restarurantData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
   const [listOfRestarurants, setListOfRestaurant] = useState(restarurantData);
   return (
      <div className="body">
         <div className="m-5 button">
            <button
               type="button"
               onClick={() => {
                  const filteredList = listOfRestarurants.filter(
                     (item) => item.info.avgRating > 4.2
                  );
                  setListOfRestaurant(filteredList);
               }}
               className="btn btn-primary"
            >
               Top Rated Restaurant
            </button>
         </div>
         <div className="res-container">
            {listOfRestarurants.map((restaurant) => (
               <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
            ))}
         </div>
         <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
               <img className="size-12" src="/img/logo.svg" alt="ChitChat Logo" />
            </div>
            <div>
               <div className="text-xl font-medium text-black">ChitChat</div>
               <p className="text-slate-500">You have a new message!</p>
            </div>
         </div>
      </div>
   );
};

export default Body;
