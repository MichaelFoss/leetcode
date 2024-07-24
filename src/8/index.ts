const isDigit = (char: string): boolean => /^[0-9]$/.test(char);

const myAtoi = (s: string): number => {
  s = s.trim();
  const isNegative = s[0] === '-';
  if (s[0] === '-' || s[0] === '+') {
    s = s.substring(1, s.length);
  }
  while (s[0] === '0' && s.length > 0) {
    s = s.substring(1, s.length);
  }
  let newS = '';
  for (let i = 0; i < s.length && isDigit(s[i]); i++) {
    newS += s[i];
  }
  if (newS === '') {
    newS = '0';
  }
  const n: number = Number.parseInt(newS) * (isNegative ? -1 : 1);
  const LIMIT_NEGATIVE = Math.pow(2, 31) * -1;
  const LIMIT_POSITIVE = Math.pow(2, 31) - 1;
  if (n < LIMIT_NEGATIVE) {
    return LIMIT_NEGATIVE;
  } else if (n > LIMIT_POSITIVE) {
    return LIMIT_POSITIVE;
  } else {
    return n;
  }
};

export default myAtoi;
