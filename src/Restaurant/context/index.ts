import { useContext } from "react";
import RestaurantContext, { RestaurantContextProps } from "./context";

/**
 * Hook function to get the Restaurant Context.
 * @returns {RestaurantContextProps} Restaurant Context
 */
const useRestaurantContext = (): RestaurantContextProps => {
  const restaurantContext = useContext(RestaurantContext);
  return restaurantContext;
};

export default useRestaurantContext;
