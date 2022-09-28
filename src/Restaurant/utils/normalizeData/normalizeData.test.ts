import normalizeData from ".";
import { OpeningHours } from "Restaurant/types";

describe(`Restaurant Function : ${normalizeData.name}`, () => {
  it("should return correct value for the first example data", () => {
    const data = {
      monday: [
        { type: "open", value: 32400 },
        { type: "close", value: 72000 },
      ],
    };

    const result = normalizeData(data as OpeningHours);

    expect(result).toEqual([{ day: "monday", openingHours: [{ open: "9:00 AM", close: "8:00 PM" }] }]);
  });

  it("should return correct value for the second example data", () => {
    const data = {
      monday: [{ type: "close", value: 3600 }],
      friday: [{ type: "open", value: 64800 }],
      saturday: [
        { type: "close", value: 3600 },
        { type: "open", value: 32400 },
        { type: "close", value: 39600 },
        { type: "open", value: 57600 },
      ],
    };

    const result = normalizeData(data as OpeningHours);

    expect(result).toEqual([
      {
        day: "monday",
        openingHours: [],
      },
      {
        day: "friday",
        openingHours: [{ open: "6:00 PM", close: "1:00 AM" }],
      },
      {
        day: "saturday",
        openingHours: [
          { open: "9:00 AM", close: "11:00 AM" },
          { open: "4:00 PM", close: "1:00 AM" },
        ],
      },
    ]);
  });

  it("should return correct value for the third example data", () => {
    const data = {
      monday: [
        { type: "open", value: 28800 },
        { type: "close", value: 36000 },
        { type: "open", value: 39600 },
        { type: "close", value: 64800 },
      ],
      tuesday: [],
      wednesday: [
        { type: "open", value: 39600 },
        { type: "close", value: 64800 },
      ],
      thursday: [
        { type: "open", value: 39600 },
        { type: "close", value: 64800 },
      ],
      friday: [
        { type: "open", value: 39600 },
        { type: "close", value: 75600 },
      ],
      saturday: [
        { type: "open", value: 39600 },
        { type: "close", value: 75600 },
      ],
      sunday: [],
    };

    const result = normalizeData(data as OpeningHours);

    expect(result).toEqual([
      {
        day: "monday",
        openingHours: [
          { open: "8:00 AM", close: "10:00 AM" },
          { open: "11:00 AM", close: "6:00 PM" },
        ],
      },
      {
        day: "tuesday",
        openingHours: [],
      },
      {
        day: "wednesday",
        openingHours: [{ open: "11:00 AM", close: "6:00 PM" }],
      },
      {
        day: "thursday",
        openingHours: [{ open: "11:00 AM", close: "6:00 PM" }],
      },
      {
        day: "friday",
        openingHours: [{ open: "11:00 AM", close: "9:00 PM" }],
      },
      {
        day: "saturday",
        openingHours: [{ open: "11:00 AM", close: "9:00 PM" }],
      },
      {
        day: "sunday",
        openingHours: [],
      },
    ]);
  });

  it("should return correct value for the fourth example data", () => {
    const data = {
      monday: [],
      tuesday: [
        { type: "open", value: 36000 },
        { type: "close", value: 64800 },
      ],
      wednesday: [],
      thursday: [
        { type: "open", value: 36000 },
        { type: "close", value: 64800 },
      ],
      friday: [{ type: "open", value: 36000 }],
      saturday: [
        { type: "close", value: 3600 },
        { type: "open", value: 36000 },
      ],
      sunday: [
        { type: "close", value: 3600 },
        { type: "open", value: 43200 },
        { type: "close", value: 75600 },
      ],
    };

    const result = normalizeData(data as OpeningHours);

    expect(result).toEqual([
      {
        day: "monday",
        openingHours: [],
      },
      {
        day: "tuesday",
        openingHours: [{ open: "10:00 AM", close: "6:00 PM" }],
      },
      {
        day: "wednesday",
        openingHours: [],
      },
      {
        day: "thursday",
        openingHours: [{ open: "10:00 AM", close: "6:00 PM" }],
      },
      {
        day: "friday",
        openingHours: [{ open: "10:00 AM", close: "1:00 AM" }],
      },
      {
        day: "saturday",
        openingHours: [{ open: "10:00 AM", close: "1:00 AM" }],
      },
      {
        day: "sunday",
        openingHours: [{ open: "12:00 PM", close: "9:00 PM" }],
      },
    ]);
  });
});
