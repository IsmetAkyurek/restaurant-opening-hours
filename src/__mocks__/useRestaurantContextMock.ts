import { RestaurantContextProps } from "Restaurant/context/context";

const useRestaurantContextMock = (props: Partial<RestaurantContextProps>) => (): RestaurantContextProps => ({
  loading: false,
  restaurant: undefined,
  onSelectRestaurant: jest.fn(),
  ...props,
});

export default useRestaurantContextMock;
