import React, { useEffect, useState } from "react";

const RestaurantMenu = () => {
   const [restaurantInfo, setRestaurantInfo] = useState();
   const fetchRestaurantData = async () => {
      const res = await fetch(
         "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=77949&catalog_qa=undefined&submitAction=ENTER"
      );
      const resData = await res.json();
      setRestaurantInfo(resData);
   };

   useEffect(() => {
      fetchRestaurantData();
   }, []);

   if (!restaurantInfo) return <div>Loading...</div>;
   const { text: restaurantName } = restaurantInfo?.data?.cards?.at(0)?.card?.card;

   // getting res info
   const {
      avgRatingString,
      totalRatingsString,
      costForTwoMessage,
      cuisines,
      areaName,
      sla,
      expectationNotifiers,
   } = restaurantInfo?.data?.cards[2]?.card?.card?.info;
   return (
      <div className="flex flex-col m-auto max-w-[800px] gap-2 p-3">
         <span className="text-2xl font-semibold mb-1">{restaurantName}</span>
         <div className="delivery-section flex flex-col border-[1px] gap-3  p-3 border-[#dfdfdf] rounded-lg">
            <span className="font-semibold flex items-center gap-2 ">
               <svg
                  className="inline-block"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  role="img"
                  aria-hidden="true"
                  strokecolor="rgba(2, 6, 12, 0.92)"
                  fillcolor="rgba(2, 6, 12, 0.92)"
               >
                  <circle
                     cx="10"
                     cy="10"
                     r="9"
                     fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                  ></circle>
                  <path
                     d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                     fill="white"
                  ></path>
                  <defs>
                     <linearGradient
                        id="StoreRating20_svg__paint0_linear_32982_71567"
                        x1="10"
                        y1="1"
                        x2="10"
                        y2="19"
                        gradientUnits="userSpaceOnUse"
                     >
                        <stop stopColor="#21973B"></stop>
                        <stop offset="1" stopColor="#128540"></stop>
                     </linearGradient>
                  </defs>
               </svg>
               <span>
                  {avgRatingString}({totalRatingsString}) • {costForTwoMessage}
               </span>
            </span>
            <span className="text-[#ff5200] text-sm font-bold">{cuisines.join(", ")}</span>
            <div className="flex items-center gap-2">
               <div className="flex flex-col h-full items-center">
                  <span className="inline-block bg-[#c4c4c4] w-[5px] h-[5px] rounded-full"></span>
                  <span className="inline-block bg-[#c4c4c4] w-[1px] h-[20px]"></span>
                  <span className="inline-block bg-[#c4c4c4] w-[5px] h-[5px] rounded-full"></span>
               </div>
               <div className="flex flex-col gap-1">
                  <div className="flex gap-3">
                     <span className="text-sm font-semibold">Outlet</span>
                     <span className="text-sm font-light text-[rgba(2, 6, 12, 0.6)]">
                        {areaName}
                     </span>
                  </div>
                  <div className="text-sm font-semibold">{sla?.slaString}</div>
               </div>
            </div>
            <div
               className="text-sm border-t-[1px] pt-2 -mr-[12px] -ml-[12px] px-3"
               dangerouslySetInnerHTML={{ __html: expectationNotifiers?.at(0)?.text }}
            ></div>
         </div>
         {/* <svg
            origin="https://www.swiggy.com"
            aria-hidden="true"
            height="24"
            width="24"
            class="sc-gEvEer buqVUw"
         >
            <use xlinkHref="https://www.swiggy.com/core/sprite-2c957cbb.svg#artDecoLeft24"></use>
         </svg> */}
      </div>
   );
};

export default RestaurantMenu;