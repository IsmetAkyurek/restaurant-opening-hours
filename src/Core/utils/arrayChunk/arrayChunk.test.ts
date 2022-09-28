import chunk from ".";

describe(`Core Function : ${chunk.name}`, () => {
  it("should return chunks", () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunks = [[1, 2, 3, 4], [5, 6, 7, 8], [9]];
    const result = chunk(data, 4);

    expect(result).toEqual(chunks);
  });
});
