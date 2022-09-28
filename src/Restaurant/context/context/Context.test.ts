import context from ".";

describe(`Restaurant Function: ${context.displayName}`, () => {
  it("should create the context", () => {
    expect(context).not.toBeFalsy();
  });
});
