type ToHour = (seconds: number) => string;

/**
 * Takes a number value in seconds and converts the value into hour and returns it in 12H format. (9:00 AM)
 * @param {number} seconds Value in seconds of the hour
 * @returns {string} Hour string in 12H format
 */
const toHour: ToHour = (seconds) => {
  const date = new Date(0);
  const timezoneOffset = date.getTimezoneOffset() * 60000;
  date.setTime(date.getTime() + timezoneOffset);

  date.setSeconds(seconds);

  return date.toLocaleTimeString("en", { hour: "numeric", minute: "numeric", hour12: true });
};

export default toHour;
