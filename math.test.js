const { sum, sub, mul, div } = require('./math');

describe('Sum Tests', () => {
  test('sum 2 + 2', () => {
    const risultato = sum(2, 2);
    expect(risultato).toBe(4);
  });

  test('sum -1 + 5', () => {
    const risultato = sum(-1, 5);
    expect(risultato).toBe(4);
  });

  test('sum 0 + 0', () => {
    const risultato = sum(0, 0);
    expect(risultato).toBe(0);
  });
});

describe('Sub Tests', () => {
  test('sub 5 - 2', () => {
    const risultato = sub(5, 2);
    expect(risultato).toBe(3);
  });

  test('sub 0 - 0', () => {
    const risultato = sub(0, 0);
    expect(risultato).toBe(0);
  });

  test('sub -3 - 4', () => {
    const risultato = sub(-3, 4);
    expect(risultato).toBe(-7);
  });
});

describe('Mul Tests', () => {
  test('mul 3 * 4', () => {
    const risultato = mul(3, 4);
    expect(risultato).toBe(12);
  });

  test('mul 0 * 100', () => {
    const risultato = mul(0, 100);
    expect(risultato).toBe(0);
  });

  test('mul -2 * 3', () => {
    const risultato = mul(-2, 3);
    expect(risultato).toBe(-6);
  });
});

describe('Div Tests', () => {
  test('div 10 / 2', () => {
    const risultato = div(10, 2);
    expect(risultato).toBe(5);
  });

  test('div -9 / 3', () => {
    const risultato = div(-9, 3);
    expect(risultato).toBe(-3);
  });

  test('div 0 / 5', () => {
    const risultato = div(0, 5);
    expect(risultato).toBe(0);
  });

  test('div by zero throws error', () => {
    expect(() => div(10, 0)).toThrow("Cannot divide by zero");
  });
});
