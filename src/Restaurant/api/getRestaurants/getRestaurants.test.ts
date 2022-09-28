import getRestaurants from ".";
import api from "Core/api";

jest.mock("Core/api");

describe(`Restaurant Function : ${getRestaurants.name}`, () => {
  it("should call the API and return the response data", async () => {
    const data = [
      { id: 1, name: "Test 1" },
      { id: 2, name: "Test 2" },
    ];
    const get = jest.fn(() => Promise.resolve({ data }));

    jest.spyOn(api, "get").mockImplementation(get);

    const result = await getRestaurants();

    expect(result).toEqual(data);
  });
});
