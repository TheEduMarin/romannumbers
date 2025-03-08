test('should return "X" for 10', () => {
  expect(convertToRoman(10)).toBe('X');
});

test('should return "XX" for 20', () => {
  expect(convertToRoman(20)).toBe('XX');
});

test('should return "L" for 50', () => {
  expect(convertToRoman(50)).toBe('L');
});

test('should return "C" for 100', () => {
  expect(convertToRoman(100)).toBe('C');
});

test('should return "D" for 500', () => {
  expect(convertToRoman(500)).toBe('D');
});
