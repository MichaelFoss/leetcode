const lengthOfLongestSubstring = (s: string): number => {
  let longest = 0;
  const seenChars = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    seenChars.clear();
    let duplicateFound = false;
    for (let j = i; j < s.length && !duplicateFound; j++) {
      const char = s.substring(j, j + 1);
      if (seenChars.has(char)) {
        duplicateFound = true;
      } else {
        seenChars.add(char);
      }
    }
    longest = Math.max(longest, seenChars.size);
  }
  return longest;
};

export default lengthOfLongestSubstring;
