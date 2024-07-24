const getReverse = (x: number, max: number): number => {
  const maxString = max.toString();
  const s = Number.parseInt(
    x.toString().split('').reverse().join('')
  ).toString();
  if (s.length > maxString.length) {
    return 0;
  } else if (s.length < maxString.length) {
    return Number.parseInt(s);
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] < maxString[i]) {
      return Number.parseInt(s);
    } else if (s[i] > maxString[i]) {
      return 0;
    }
  }
  return Number.parseInt(s);
};

const reverse = (x: number): number => {
  const MAX_POSITIVE = Math.pow(2, 31);
  if (x < 0) {
    const result = getReverse(x * -1, MAX_POSITIVE - 1);
    if (result === 0) {
      return 0;
    } else {
      return result * -1;
    }
  } else {
    return getReverse(x, MAX_POSITIVE);
  }
};

export default reverse;
