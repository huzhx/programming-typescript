import { Set } from './set';

test('test add(value)', () => {
  const set = new Set();
  const result = set.add(1);
  const values = new Array();
  values[1] = 1;
  const expected = { values };
  expect(result).toEqual(expected);
});

test('test has(value)', () => {
  const set = new Set();
  set.add(1);
  const result = set.has(1);
  expect(result).toBeTruthy();
});
