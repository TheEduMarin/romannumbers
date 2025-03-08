test('should return "I" for 1', () => {
  expect(convertToRoman(1)).toBe('I');
});

test('should return "II" for 2', () => {
  expect(convertToRoman(2)).toBe('II');
});

test('should return "V" for 5', () => {
  expect(convertToRoman(5)).toBe('V');
});

test('should return "VII" for 7', () => {
  expect(convertToRoman(7)).toBe('VII');
});
