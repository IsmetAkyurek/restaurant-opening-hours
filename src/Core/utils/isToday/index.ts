type IsToday = (day: number) => boolean;

/**
 * Takes an week index value of a day and returns if the given day is today.
 * @param {number} day Week index value of the date
 * @returns {boolean} value of the condition
 */
const isToday: IsToday = (day) => {
  const today = new Date().getDay();
  return today === day;
};

export default isToday;
