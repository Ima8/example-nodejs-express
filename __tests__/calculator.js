const cal = require('../helper/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(cal.plus(1, 2)).toBe(3);
});

test('adds 3 + 5 to equal 8', () => {
  expect(cal.plus(3, 5)).toBe(8);
});

// Fix here
test('adds 0 + 0 to equal 0', () => {
  expect(cal.plus(0, 0)).toBe(0);
});

test('1 - 1 to equal 0', () => {
  expect(cal.minus(1, 1)).toBe(0);
});

test('3 - 1 to equal 2', () => {
  expect(cal.minus(3, 1)).toBe(2);
});





