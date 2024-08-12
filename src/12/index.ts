const ROMAN_1 = 'I';
const ROMAN_5 = 'V';
const ROMAN_10 = 'X';
const ROMAN_50 = 'L';
const ROMAN_100 = 'C';
const ROMAN_500 = 'D';
const ROMAN_1000 = 'M';

const digitMap = new Map<
  number,
  { current: string; half: string; full: string }
>([
  [1, { current: ROMAN_1, half: ROMAN_5, full: ROMAN_10 }],
  [2, { current: ROMAN_10, half: ROMAN_50, full: ROMAN_100 }],
  [3, { current: ROMAN_100, half: ROMAN_500, full: ROMAN_1000 }],
]);

const intToRoman = (...args: any[]): string => {
  const num: number = args[0];
  if (num < 1 || num > 3999) {
    throw new RangeError('num must be between 1 and 3999.');
  }
  // Start off with as many Ms as are necessary
  let s = ROMAN_1000.repeat(Math.floor(num / 1000));
  const numDigits = num.toString().length;
  for (
    let digitPlace = numDigits === 4 ? 3 : numDigits;
    digitPlace > 0;
    digitPlace--
  ) {
    const digit = Math.floor(
      (num % Math.pow(10, digitPlace)) / Math.pow(10, digitPlace - 1)
    );
    const mapEntry = digitMap.get(digitPlace);
    // console.log(`${digitPlace}: ${digit}`);
    if (digit <= 3) {
      // 0-3
      s += mapEntry.current.repeat(digit);
    } else if (digit === 4) {
      // 4
      s += mapEntry.current + mapEntry.half;
    } else if (digit <= 8) {
      // 5-8
      s += mapEntry.half + mapEntry.current.repeat(digit - 5);
    } else {
      // 9
      s += mapEntry.current + mapEntry.full;
    }
  }
  return s;
};

export default intToRoman;
