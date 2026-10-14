const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('divide 100 / 20 to equal 5', () => {
  expect(calculator.divide(543, 3)).toBe(181);
});

test('divide -100 / 20 to equal -5', () => {
  expect(calculator.divide(-100, 20)).toBe(-5);
});

test('divide 10 / 0 to equal Infinity', () => {
  expect(calculator.divide(10, 0)).toBe(Infinity);
});

test('multiply 0.5 * 4 to equal 2', () => {
  expect(calculator.multiply(0.5,4)).toBe(2);
});

test('multiply 1/5 * 3/5 to equal 0.12', () => {
  expect(calculator.multiply(0.2, 0.6)).toBe(0.12);
});

test('multiply 34 * 0 to equal 0', () => {
  expect(calculator.multiply(34, 0)).toBe(0);
});

