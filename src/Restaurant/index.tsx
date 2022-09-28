import RestaurantLayout from "./layout";
import RestaurantContextProvider from "./context/provider";

/**
 * Renders the Restaurant Module
 * @returns {JSX.Element} Restaurant Module
 */
const Restaurant: React.FC = () => {
  return (
    <RestaurantContextProvider>
      <RestaurantLayout />
    </RestaurantContextProvider>
  );
};

export default Restaurant;
