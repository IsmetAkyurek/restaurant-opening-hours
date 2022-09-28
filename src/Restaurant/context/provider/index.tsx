import { useRequest } from "Core/hooks";
import restaurantApi from "Restaurant/api";
import RestaurantContext from "../context";
import { ReactNode, useState } from "react";
import { Restaurant } from "Restaurant/types";

export type RestaurantContextProviderProps = {
  children: ReactNode;
};

/**
 * Wraps given children with Restaurant Context and provides necessary functions and data.
 * @param {ReactNode} children Elements to be rendered inside
 * @returns Children elements wrapped with Restaurant Context Provider
 */
const RestaurantContextProvider: React.FC<RestaurantContextProviderProps> = ({ children }) => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const getRestaurant = useRequest(restaurantApi.getRestaurant);

  const onSelectRestaurant = (id?: number) => {
    if (id) {
      getRestaurant.request(id).then((response) => {
        setRestaurant({ ...response });
      });
    } else {
      setRestaurant(undefined);
    }
  };

  return (
    <RestaurantContext.Provider value={{ restaurant, onSelectRestaurant, loading: getRestaurant.loading }}>
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContextProvider;
