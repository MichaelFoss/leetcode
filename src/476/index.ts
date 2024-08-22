const findComplement = (...args: any[]): number => {
  const num: number = Number.parseInt(args[0]);
  const numDigits = Math.floor(Math.log2(num)) + 1;
  const compliment = Math.pow(2, numDigits) - 1 - num;
  return compliment;
};

export default findComplement;
