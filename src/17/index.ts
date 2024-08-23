const getDigitMap = (): Record<string, [string, string, string]> => {
  const ASCII_a = 'a'.charCodeAt(0);
  const digitMap = {};
  for (let digit = 2; digit <= 9; digit++) {
    digitMap[digit.toString()] = new Array(3)
      .fill('')
      .map((_, charIndex) =>
        String.fromCharCode((digit - 2) * 3 + ASCII_a + charIndex)
      );
  }
  // Move the 's' from 8 to 7
  digitMap['7'].push(digitMap['8'].shift());
  // Move the 'x' from 9 to 8
  digitMap['8'].push(digitMap['9'].shift());
  // Add the 'y' & 'z' to 9
  digitMap['9'].push(String.fromCharCode(digitMap['9'][0].charCodeAt(0) + 2));
  digitMap['9'].push(String.fromCharCode(digitMap['9'][0].charCodeAt(0) + 3));
  return digitMap;
};

const digitMap = getDigitMap();

const addToSet = (
  digits: Array<string>,
  combos: Set<string>,
  prefix: string = ''
) => {
  const digit = digits[0];
  const remainingDigits = [...digits];
  remainingDigits.shift();
  for (let i = 0; i < digitMap[digit].length; i++) {
    const newPattern = `${prefix}${digitMap[digit][i]}`;
    if (remainingDigits.length > 0) {
      addToSet(remainingDigits, combos, newPattern);
    } else {
      combos.add(newPattern);
    }
  }
};

const letterCombinations = (...args: any[]): Array<string> => {
  const digits: Array<string> = args[0].split('');
  if (digits.length === 0) {
    return [];
  }
  const combos = new Set<string>();

  addToSet(digits, combos);
  return Array.from(combos.values());
};

export default letterCombinations;
