import { isToday } from "Core/utils";
import { Card, Icon } from "Core/components";
import styles from "./OpeningHours.module.scss";
import weekDays from "Restaurant/constants/weekDays";
import { NormalizedOpeningHour } from "Restaurant/types";

export type OpeningHoursProps = {
  data: NormalizedOpeningHour[];
};

/**
 * Renders the given weekly opening/closing data inside a Card Component.
 * @param {NormalizedOpeningHour[]} data Weekly opening/closing hours data to be rendered
 * @returns {JSX.Element} Daily opening/closing hours based on the given data inside a Card Component.
 */
const OpeningHours: React.FC<OpeningHoursProps> = ({ data }) => {
  return (
    <Card className={styles.container}>
      <h3>
        <Icon name="clock" /> Opening Hours
      </h3>
      <ul>
        {data.map((x) => (
          <li key={x.day}>
            {weekDays[x.day].label}
            {isToday(weekDays[x.day].index) && <span className={styles.today}>Today</span>}
            <div className={styles.hours}>
              {x.openingHours.length > 0 ? (
                x.openingHours.map((y) => (
                  <div key={y.open}>
                    {y.open} - {y.close}
                  </div>
                ))
              ) : (
                <span className={styles.closed}>Closed</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default OpeningHours;
