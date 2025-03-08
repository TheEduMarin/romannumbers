import { convertToRoman } from './romanConverter';

test('should return "I" for 1', () => {
  expect(convertToRoman(1)).toBe('I');
});
