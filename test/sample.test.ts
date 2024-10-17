import { sumFunction } from '../src/utils/sample';

describe('testing sumFunction', () => {
  test('sumFunctionWithCorrectValues', () => {
    const value1: number = 10;
    const value2: number = 5;

    const result: number = 15;

    expect(sumFunction(value1, value2)).toBe(result);
  });
});
