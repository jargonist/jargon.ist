// @flow

const chunks = <T>(arr: Array<T>, x: number): Array<Array<T>> => {
  if (arr.length === 0) {
    return [];
  }

  return [arr.slice(0, x)].concat(chunks(arr.slice(x), x));
};

export default chunks;
