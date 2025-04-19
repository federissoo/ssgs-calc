import { sum, sub, mul, div } from './math.js';

describe('Funzioni matematiche', () => {
  test('sum: somma 2 + 3 = 5', () => {
    expect(sum(2, 3)).toBe(5);
  });

  test('sub: 5 - 2 = 3', () => {
    expect(sub(5, 2)).toBe(3);
  });

  test('mul: 4 * 3 = 12', () => {
    expect(mul(4, 3)).toBe(12);
  });

  test('div: 10 / 2 = 5', () => {
    expect(div(10, 2)).toBe(5);
  });

  test('div by zero: dovrebbe lanciare un errore', () => {
    expect(() => div(10, 0)).toThrow("Cannot divide by zero");
  });
});
