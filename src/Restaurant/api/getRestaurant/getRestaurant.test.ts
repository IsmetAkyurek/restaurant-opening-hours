import api from "Core/api";
import getRestaurant from ".";

jest.mock("Core/api");

describe(`Restaurant Function : ${getRestaurant.name}`, () => {
  it("should call the API and return the response data", async () => {
    const data = { id: 1, name: "Test Data", location: [], openingHours: {} };
    const expectData = { id: 1, name: "Test Data", location: [], openingHours: [] };
    const get = jest.fn(() => Promise.resolve({ data }));

    jest.spyOn(api, "get").mockImplementation(get);

    const result = await getRestaurant(data.id);

    expect(result).toEqual(expectData);
  });
});
