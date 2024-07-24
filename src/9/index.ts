const isPalindrome = (x: number): boolean => {
  const s1: string = x.toString();
  const s2: string = s1.split('').reverse().join('');
  return s1 === s2;
};

export default isPalindrome;
