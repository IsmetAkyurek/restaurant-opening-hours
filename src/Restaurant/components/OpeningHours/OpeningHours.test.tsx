import OpeningHours from ".";
import { asArray } from "Core/utils";
import { weekDays } from "Restaurant/constants";
import { render, screen } from "@testing-library/react";
import { NormalizedOpeningHour } from "Restaurant/types";

describe(`Restaurant Component : ${OpeningHours.name}`, () => {
  it("should render the day with given data", () => {
    const data: NormalizedOpeningHour[] = [{ day: "monday", openingHours: [{ open: "9:00 AM", close: "6:00 PM" }] }];

    render(<OpeningHours data={data} />);

    const dayElement = screen.getByText("Monday");
    const hourElement = screen.getByText("9:00 AM - 6:00 PM");

    expect(dayElement).toBeInTheDocument();
    expect(hourElement).toBeInTheDocument();
  });

  it("should render the closed label with given data", () => {
    const data: NormalizedOpeningHour[] = [{ day: "monday", openingHours: [] }];

    render(<OpeningHours data={data} />);

    const dayElement = screen.getByText("Monday");
    const hourElement = screen.getByText("Closed");

    expect(dayElement).toBeInTheDocument();
    expect(hourElement).toBeInTheDocument();
  });

  it("should render the today label with given data", () => {
    const today = asArray(weekDays).find((x) => x.value.index === new Date().getDay())?.key || "monday";
    const data: NormalizedOpeningHour[] = [{ day: today, openingHours: [] }];

    render(<OpeningHours data={data} />);

    const todayElement = screen.getByText("Today");

    expect(todayElement).toBeInTheDocument();
  });
});
