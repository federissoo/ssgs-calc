const { sum } = require('./math');

describe('Sum Tests', () => {
  test('sum 2 + 2', () => {
    const risultato = sum(2, 2);
    expect(risultato).toBe(4);
  });

  test('sum 3 + 5', () => {
    const risultato = sum(3, 5);
    expect(risultato).toBe(7);
  });
});