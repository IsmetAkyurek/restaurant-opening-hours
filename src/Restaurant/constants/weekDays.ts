import { Weekday } from "Restaurant/types";

type WeekDays = Record<Weekday, { label: string; index: number }>;

/**
 * Weekday index and label values as an object.
 */
const weekDays: WeekDays = {
  monday: {
    label: "Monday",
    index: 1,
  },
  tuesday: {
    label: "Tuesday",
    index: 2,
  },
  wednesday: {
    label: "Wednesday",
    index: 3,
  },
  thursday: {
    label: "Thursday",
    index: 4,
  },
  friday: {
    label: "Friday",
    index: 5,
  },
  saturday: {
    label: "Saturday",
    index: 6,
  },
  sunday: {
    label: "Sunday",
    index: 0,
  },
};

export default weekDays;
