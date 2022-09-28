import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

/**
 * Initializes Sentry with environment Sentry DSN. (Only enabled for Production Mode)
 */
const initSentry = () => {
  Sentry.init({
    tracesSampleRate: 1.0,
    integrations: [new BrowserTracing()],
    dsn: process.env.REACT_APP_SENTRY_DSN,
    enabled: process.env.NODE_ENV === "production",
  });
};

export default initSentry;
