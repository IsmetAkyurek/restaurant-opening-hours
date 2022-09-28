import { arrayChunk, asArray, toHour } from "Core/utils";
import { NormalizedOpeningHour, OpeningHours } from "Restaurant/types";

type NormalizeData = (data: OpeningHours) => NormalizedOpeningHour[];

/**
 * Takes and processes the weekly data of the opening hours as an objects, calculates the opening/closing times and returns it as an array
 * @param {OpeningHours} data Weekly data of the opening hours as an object
 * @returns {NormalizedOpeningHour[]} Weekly opening/closing times as an array
 */
const normalizeData: NormalizeData = (data) => {
  return asArray(data).map((row, index, arr) => {
    const nextRow = arr[(index + 1) % arr.length];
    const prevRow = arr[(index + arr.length - 1) % arr.length];
    const rowLength = row.value.length;

    if (rowLength > 0) {
      if (row.value[0]?.type === "close") {
        const [closingItem] = row.value.splice(0, 1);
        prevRow.value.push(closingItem);
      }
      if (row.value[rowLength - 1]?.type === "open") {
        const [openingItem] = nextRow.value.splice(0, 1);
        row.value.push(openingItem);
      }
    }

    return {
      day: row.key,
      openingHours: arrayChunk(row.value, 2).map(([open, close]) => ({
        open: toHour(open.value),
        close: toHour(close.value),
      })),
    };
  });
};

export default normalizeData;
