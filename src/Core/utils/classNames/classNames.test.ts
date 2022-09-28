import classNames from ".";

describe(`Core Function : ${classNames.name}`, () => {
  it("should filter out empty values and return combined classNames with given mixed values", () => {
    const result = classNames("class1", "", ["class2", false], null, ["class3", true], undefined);

    expect(result).toBe("class1 class3");
  });
});
