import * as index from ".";

describe("Index", () => {
  it("Should render app withour crashing", () => {
    expect(JSON.stringify(Object.assign({}, index, { _reactInternalInstance: "censored" }))).toMatchSnapshot();
  });
});
