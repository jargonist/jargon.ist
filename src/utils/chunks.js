// @flow

const chunks = <T>(arr: Array<T>, max: number): Array<Array<T>> => {
  if (arr.length === 0) {
    return [];
  }

  const perArr = Math.ceil(arr.length / max);

  return Array.from({ length: max })
    .map((_, index) => arr.slice(index * perArr, index * perArr + perArr))
    .filter(i => i.length > 0);
};

export default chunks;
