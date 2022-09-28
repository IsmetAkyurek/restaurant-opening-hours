import api from "Core/api";
import { OpeningHours, Restaurant } from "Restaurant/types";
import { normalizeData } from "Restaurant/utils";

type RestaurantResponse = {
  id: number;
  name: string;
  location: [number, number];
  openingHours: OpeningHours;
};

type GetRestaurant = (id: number) => Promise<Restaurant>;

/**
 * Calls the restaurant detail API with the given ID, runs normalizeData on the response and returns the result.
 * @param {number} id Restaurant ID to be fetched
 * @returns {Restaurant[]} Normalized restaurant data
 */
const getRestaurant: GetRestaurant = async (id) => {
  const response = await api.get<RestaurantResponse>(`restaurants/${id}`);
  return {
    ...response.data,
    openingHours: normalizeData(response.data.openingHours),
  };
};

export default getRestaurant;
