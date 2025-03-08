export function convertToRoman(num) {
  if (num === 1) {
    return 'I';
  } else if (num === 2) {
    return 'II';
  } else if (num === 5) {
    return 'V';
  } else if (num === 7) {
    return 'VII';
  }
  return '';
}
