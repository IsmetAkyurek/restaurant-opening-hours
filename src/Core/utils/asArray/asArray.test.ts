import asArray from ".";

describe(`Core Function : ${asArray.name}`, () => {
  it("should return the key-value pairs of given object", () => {
    const value = { key1: 1, key2: 2, key3: 3 };

    const result = asArray(value);

    expect(result).toEqual([
      { key: "key1", value: 1 },
      { key: "key2", value: 2 },
      { key: "key3", value: 3 },
    ]);
  });

  it("should return empty array given an empty data", () => {
    const value = {};

    const result = asArray(value);

    expect(result).toEqual([]);
  });

  it("should return empty array given an undefined data", () => {
    const value = undefined as never;

    const result = asArray(value);

    expect(result).toEqual([]);
  });
});
