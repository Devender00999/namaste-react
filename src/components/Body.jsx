import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { restarurantData } from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
   const [listOfRestarurants, setListOfRestaurant] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
   const [searchText, setSearchText] = useState("");

   const onlineStatus = useOnlineStatus();

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const response = await fetch(
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGvvvv"
      );
      const data = await response.json();
      setListOfRestaurant(
         data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurants(
         data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
   };

   if (onlineStatus === false)
      return <h1>Looks like your are offline. Please check your internet connection.</h1>;

   const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

   const { loggedInUser, setUserName } = useContext(UserContext);

   const sampleData = Array.from(new Array(8), (v, k) => k);
   return (
      <div className="body mx-[calc(10%+36px)]">
         <div className="m-5 flex justify-between gap-4">
            {filteredRestaurants.length === 0 ? (
               <Shimmer classNames="w-[20rem]" />
            ) : (
               <>
                  <div className="flex items-center gap-5">
                     <input
                        value={searchText}
                        onChange={(e) => {
                           setSearchText(e.target.value);
                           if (e.target.value.length == 0) {
                              setFilteredRestaurants(listOfRestarurants);
                           }
                        }}
                        type="text"
                        id="first_name"
                        // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                        className="form-input rounded"
                        placeholder="Enter restaurant name"
                        required
                     />
                     <button
                        onClick={() => {
                           const filtered = listOfRestarurants.filter((item) => {
                              return item.info.name
                                 .toLowerCase()
                                 .includes(searchText.toLowerCase());
                           });
                           setFilteredRestaurants(filtered);
                        }}
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                     >
                        Search
                     </button>
                  </div>
                  <div className="flex gap-5 items-center">
                     <button
                        type="button"
                        onClick={() => {
                           const filteredList = listOfRestarurants.filter(
                              (item) => item.info.avgRating > 4.5
                           );
                           setFilteredRestaurants(filteredList);
                        }}
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                     >
                        Top Rated Restaurant
                     </button>

                     <button
                        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={() => setFilteredRestaurants(listOfRestarurants)}
                     >
                        Clear
                     </button>
                  </div>
               </>
            )}

            {/* <div>
               <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  className="border-[1px] border-gray-400 rounded-md p-1 outline-none"
               />
            </div> */}
         </div>
         {filteredRestaurants.length === 0 ? (
            <div className="res-container grid grid-cols-4 gap-8 my-8 mx-4">
               {sampleData.map((item, key) => (
                  <Shimmer key={item} classNames="h-[15rem]" />
               ))}
            </div>
         ) : (
            <div className="res-container grid grid-cols-4 gap-8 my-8 mx-4">
               {filteredRestaurants.map((restaurant) => (
                  <Link
                     to={`restaurants/${restaurant?.cta?.link?.slice(
                        restaurant?.cta?.link?.lastIndexOf("/") + 1
                     )}`}
                     key={restaurant.info.id}
                     data-testid="res-card-link"
                     className="test"
                  >
                     {restaurant?.info?.promoted ? (
                        <RestaurantCardPromoted
                           key={restaurant.info.id}
                           resData={restaurant.info}
                        />
                     ) : (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                     )}
                  </Link>
               ))}
            </div>
         )}
      </div>
   );
};

export default Body;
