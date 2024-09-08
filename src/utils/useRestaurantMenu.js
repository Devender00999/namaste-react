import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
   const [restaurantMenu, setRestaurantMenu] = useState(null);

   const fetchRestaurantData = async () => {
      const res = await fetch(
         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${parseInt(
            resId.match(/\d+/)[0]
         )}&catalog_qa=undefined&submitAction=ENTER`
      );
      const resData = await res.json();
      setRestaurantMenu(resData?.data);
   };

   useEffect(() => {
      fetchRestaurantData();
   }, []);

   return restaurantMenu;
};

export default useRestaurantMenu;
