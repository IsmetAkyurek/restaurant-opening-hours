import { useState } from "react";
import { useGet } from "Core/hooks";
import { Select } from "Core/components";
import { pushGtmEvent } from "Core/utils";
import restaurantApi from "Restaurant/api";
import useRestaurantContext from "Restaurant/context";

/**
 * Renders a Select Component with the current restaurant list.
 * @returns {JSX.Element} Select component with the current restaurant list
 */
const RestaurantSelect: React.FC = () => {
  const [value, setValue] = useState<number>();
  const restaurantContext = useRestaurantContext();
  const restaurants = useGet(restaurantApi.getRestaurants);

  const onChange = (id?: number) => {
    setValue(id);
    restaurantContext.onSelectRestaurant(id);
    pushGtmEvent("restaurant.selected", { id });
  };

  return (
    <Select value={value} onChange={onChange} placeholder="Select a restaurant" loading={restaurants.loading}>
      {restaurants.data?.map((x) => (
        <Select.Option key={x.id} value={x.id}>
          {x.name}
        </Select.Option>
      ))}
    </Select>
  );
};

export default RestaurantSelect;
