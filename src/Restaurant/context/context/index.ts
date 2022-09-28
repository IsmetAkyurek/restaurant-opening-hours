import { createContext } from "react";
import { Restaurant } from "Restaurant/types";

export type RestaurantContextProps = {
  loading: boolean;
  restaurant?: Restaurant;
  onSelectRestaurant: (id?: number) => void;
};

const RestaurantContext = createContext({} as RestaurantContextProps);

export default RestaurantContext;
