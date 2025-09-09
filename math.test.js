const { add, multiply, divide } = require('./math');

// This is the pattern you'll use 90% of the time
describe('Math functions', () => {
  // Test successful cases
  test('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test('should multiply two numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  // Test error cases
  test('should throw error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('should divide numbers correctly', () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
  });
});