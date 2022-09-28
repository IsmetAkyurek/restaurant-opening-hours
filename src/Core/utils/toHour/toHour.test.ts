import toHour from ".";

describe(`Core Function : ${toHour.name}`, () => {
  it("should return hour string with given values", () => {
    const value = [0, 7200, 32400, 43200, 79200];

    const result = value.map((x) => toHour(x));

    expect(result).toEqual(["12:00 AM", "2:00 AM", "9:00 AM", "12:00 PM", "10:00 PM"]);
  });
});
