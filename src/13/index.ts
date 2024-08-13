const ROMAN_1 = 'I';
const ROMAN_5 = 'V';
const ROMAN_10 = 'X';
const ROMAN_50 = 'L';
const ROMAN_100 = 'C';
const ROMAN_500 = 'D';
const ROMAN_1000 = 'M';

const romanNumeralMapping = new Map<string, number>([
  [ROMAN_1, 1],
  [ROMAN_5, 5],
  [ROMAN_10, 10],
  [ROMAN_50, 50],
  [ROMAN_100, 100],
  [ROMAN_500, 500],
  [ROMAN_1000, 1000],
]);

const romanToInt = (...args: any[]): number => {
  let romanNumeral: string = args[0];
  let num = 0;
  for (let i = romanNumeral.length - 1, previousNumber = 0; i >= 0; i--) {
    const currentNumber = romanNumeralMapping.get(romanNumeral[i]);
    num += currentNumber * (currentNumber < previousNumber ? -1 : 1);
    previousNumber = currentNumber;
  }
  return num;
};

export default romanToInt;
