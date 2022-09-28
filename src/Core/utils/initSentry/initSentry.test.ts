import initSentry from ".";
import * as Sentry from "@sentry/react";

jest.mock("@sentry/react");
jest.mock("@sentry/tracing", () => ({
  BrowserTracing: jest.fn(),
}));

describe(`Core Function : ${initSentry.name}`, () => {
  it("should initialize sentry with correct arguments", () => {
    const init = jest.fn();
    const BrowserTracing = jest.fn();
    const sentryDsn = "Test DSN";
    process.env.REACT_APP_SENTRY_DSN = sentryDsn;

    jest.spyOn(Sentry, "init").mockImplementation(init);

    initSentry();

    const call = init.mock.calls[0][0];

    expect(call).toEqual({
      dsn: sentryDsn,
      enabled: false,
      tracesSampleRate: 1,
      integrations: [new BrowserTracing()],
    });
  });
});
