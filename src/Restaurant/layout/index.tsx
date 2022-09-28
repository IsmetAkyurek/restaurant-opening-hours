import { cx } from "Core/utils";
import { Loading } from "Core/components";
import styles from "./RestaurantLayout.module.scss";
import useRestaurantContext from "Restaurant/context";
import { RestaurantLocationMap, RestaurantOpeningHours, RestaurantSelect } from "Restaurant/components";

/**
 * Renders the base Restaurant Module Layout
 * @returns {JSX.Element} Restaurant Layout
 */
const RestaurantLayout: React.FC = () => {
  const restaurantContext = useRestaurantContext();

  return (
    <Loading loading={restaurantContext.loading}>
      <main className={cx(styles.container, [styles.selected, !!restaurantContext.restaurant])}>
        <div className={styles.content}>
          {!restaurantContext.restaurant && <img className={styles.logo} src="/img/logoBlue.svg" alt="Wolt" />}
          <RestaurantSelect />
          {restaurantContext.restaurant && <RestaurantOpeningHours data={restaurantContext.restaurant.openingHours} />}
        </div>
        <RestaurantLocationMap />
      </main>
    </Loading>
  );
};

export default RestaurantLayout;
