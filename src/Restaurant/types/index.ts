export type Weekday = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export type OpeningHours = Record<Weekday, { value: number; type: "open" | "close" }[]>;

export type NormalizedOpeningHour = {
  day: Weekday;
  openingHours: { open: string; close: string }[];
};

export type Restaurant = {
  id: number;
  name: string;
  location: [number, number];
  openingHours: NormalizedOpeningHour[];
};
