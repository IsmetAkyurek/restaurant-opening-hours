type PushGtmEvent = (event: string, data?: Record<string, unknown>) => void;

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Pushes an event to GTM Layer with given params.
 * @param {string} event Event Tag Name to be pushed
 * @param {Record<string, unknown>} (Optional) data to be pushed
 */
const pushGtmEvent: PushGtmEvent = async (event, data = {}) => {
  window.dataLayer.push({
    event,
    timestamp: new Date().getTime(),
    ...data,
  });
};

export default pushGtmEvent;
