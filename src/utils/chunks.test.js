// @flow

import chunks from './chunks';

it('runs correctly', () => {
  const arr = [1, 2, 3, 4, 5];

  expect(chunks(arr, 2)).toEqual([[1, 2, 3], [4, 5]]);
  expect(chunks(arr, 3)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunks(arr, 4)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunks([1, 2], 4)).toEqual([[1], [2]]);
});

it('does nothing for empty array', () => {
  expect(chunks([], 4)).toEqual([]);
});
