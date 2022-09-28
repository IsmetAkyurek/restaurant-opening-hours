type ArrayChunk = <T>(data: T[], chunkLength: number) => T[][];

/**
 * Takes an array list and splits the list into chunks with the given length.
 * @param {any[]} data Array list to be splitted
 * @param {number} chunkLength Lengths of the chunks to be created
 * @returns {any[][]} A list of chunks created from the given data
 */
const arrayChunk: ArrayChunk = (data, chunkLength) => {
  const length = data.length;
  const chunkData = [];

  for (let i = 0; i < length; i += chunkLength) {
    chunkData.push(data.slice(i, i + chunkLength));
  }

  return chunkData;
};

export default arrayChunk;
