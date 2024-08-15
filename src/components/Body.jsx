import RestaurantCard from "./RestaurantCard";
import { restarurantData } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
   const [listOfRestarurants, setListOfRestaurant] = useState(restarurantData);
   const [query, setQuery] = useState("");

   useEffect(() => {
      if (query.length !== 0) {
         const filtered = listOfRestarurants.filter((item) => {
            return item.info.name.toLowerCase().includes(query.toLowerCase());
         });
         setListOfRestaurant(filtered);
      } else {
         setListOfRestaurant(restarurantData);
      }
   }, [query]);

   return (
      <div className="body">
         <div className="m-5 flex justify-between gap-4">
            <div>
               <button
                  type="button"
                  onClick={() => {
                     const filteredList = listOfRestarurants.filter(
                        (item) => item.info.avgRating > 4.2
                     );
                     setListOfRestaurant(filteredList);
                  }}
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
               >
                  Top Rated Restaurant
               </button>

               <button
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={() => setListOfRestaurant(restarurantData)}
               >
                  Clear
               </button>
            </div>

            <div>
               <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  className="border-[1px] border-gray-400 rounded-md p-1 outline-none"
               />
            </div>
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
