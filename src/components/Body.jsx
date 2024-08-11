import RestaurantCard from "./RestaurantCard";
import { restarurantData } from "../utils/mockData";

const Body = () => {
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
            {restarurantData.map((restaurant) => (
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
