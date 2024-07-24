const isPalindrome = (
  s: string,
  startIndex: number,
  endIndex: number
): boolean => {
  // Is this a palindrome?
  // console.log(
  //   `Testing [${startIndex},${endIndex}]: '${s.substring(
  //     startIndex,
  //     endIndex + 1
  //   )}'`
  // );

  // Test if palindrome
  // Only test the first half, as the second half gets tested IN the first half
  const maxIndex = (endIndex - startIndex) / 2;
  for (let i = 0; i < maxIndex; i++) {
    const firstCharIndex = startIndex + i;
    const firstChar = s[firstCharIndex];
    const lastCharIndex = endIndex - i;
    const lastChar = s[lastCharIndex];
    // console.log(
    //   `    [${firstCharIndex},${lastCharIndex}]:` +
    //     ` '${firstChar}' ?== '${lastChar}' ==> ` +
    //     ` ${firstChar === lastChar}`
    // );
    if (firstChar !== lastChar) {
      return false;
    }
  }

  // Send back as a yes
  // console.log(
  //   `Found [${startIndex},${endIndex}]: '${s.substring(
  //     startIndex,
  //     endIndex + 1
  //   )}'`
  // );
  return true;
};

const longestPalindrome = (s: string): string => {
  if (s.length <= 1) {
    return s;
  }
  let currentMax = 1;
  let [maxStart, maxEnd] = [0, 0];
  // acbca
  // max=1
  // S,E=0,0
  // i=0
  // j=4
  for (let i = 0; i < s.length; i++) {
    for (let j = i + currentMax; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        [maxStart, maxEnd] = [i, j];
        currentMax = maxEnd - maxStart + 1;
      }
    }
  }
  return s.substring(maxStart, maxEnd + 1);
};

export default longestPalindrome;
