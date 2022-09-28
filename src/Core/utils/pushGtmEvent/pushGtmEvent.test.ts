import pushGtmEvent from ".";

describe(`Core Function : ${pushGtmEvent.name}`, () => {
  it("should push given event to GTM DataLayer", () => {
    window.dataLayer = [];

    pushGtmEvent("test_event");

    expect(window.dataLayer[0].event).toEqual("test_event");
  });
});
