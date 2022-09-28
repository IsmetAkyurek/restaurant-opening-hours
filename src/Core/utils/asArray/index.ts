import { Entry } from "Core/types/Entry";

type AsArray = <T extends Record<string, unknown>>(data: T) => Entry<T>[];

/**
 * Takes an object and converts it to key-value paired array
 * @param {Record<string, any>} data Object to be returned as array
 * @returns {Entry<any>[]} key-value pairs as an array of the given object
 */
const asArray: AsArray = (data) => {
  if (!data) return [];
  return Object.keys(data).map((x) => ({
    key: x as keyof typeof data,
    value: data[x as keyof typeof data],
  }));
};

export default asArray;
