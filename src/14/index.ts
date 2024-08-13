const MAX_STRING_SIZE = 200;

const longestCommonPrefix = (...args: any[]): string => {
  const strs: Array<string> = args[0];
  let prefix = '';
  for (
    let index = 0, allMatch = true;
    allMatch && index < MAX_STRING_SIZE;
    index++
  ) {
    const char = strs[0][index];
    if (char === undefined) {
      // End of first string, break out of loop
      allMatch = false;
    }
    for (let strIndex = 1; strIndex < strs.length; strIndex++) {
      if (char !== strs[strIndex][index]) {
        // Char mismatch or end of a string,
        // break out of both loops
        allMatch = false;
      }
    }
    if (allMatch) {
      prefix += char;
    }
  }
  return prefix;
};

export default longestCommonPrefix;
