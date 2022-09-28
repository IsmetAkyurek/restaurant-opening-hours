type Argument = string | null | undefined | [string, boolean];
type Arguments = Argument[];
type CX = (...args: Arguments) => string;

/**
 * Returns a joined className according to given parameters, filters empty values.
 * @param {Arguments} classList className list to be combined
 * @returns {string} Combined className as a string
 */
const cx: CX = (...args) => {
  const classList: string[] = [];

  args.forEach((x) => {
    if (typeof x === "string" && x !== "") {
      classList.push(x);
    } else if (typeof x === "object") {
      if (Array.isArray(x)) {
        if (x[1] === true) {
          classList.push(x[0]);
        }
      }
    }
  });

  return classList.join(" ");
};

export default cx;
