import isToday from ".";

describe(`Core Function : ${isToday.name}`, () => {
  it("should return true given the current day's week index", () => {
    const todayIndex = new Date().getDay();

    const result = isToday(todayIndex);

    expect(result).toEqual(true);
  });

  it("should return false given another day's week index", () => {
    const date = new Date();
    date.setDate(date.getDate() - 10);

    const result = isToday(date.getDay());

    expect(result).toEqual(false);
  });
});
