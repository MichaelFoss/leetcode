const isValid = (...args: Array<any>): boolean => {
  let s: string = args[0];
  let parenCount = 0;
  let bracketCount = 0;
  let braceCount = 0;
  const openStack: Array<string> = [];
  let lastOpen: string = '';
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    switch (char) {
      case '(':
        parenCount++;
        openStack.push('(');
        break;
      case '{':
        braceCount++;
        openStack.push('{');
        break;
      case '[':
        bracketCount++;
        openStack.push('[');
        break;
      case ')':
        parenCount--;
        if (parenCount < 0) {
          return false;
        }
        lastOpen = openStack.pop();
        if (lastOpen !== '(') {
          return false;
        }
        break;
      case '}':
        braceCount--;
        if (braceCount < 0) {
          return false;
        }
        lastOpen = openStack.pop();
        if (lastOpen !== '{') {
          return false;
        }
        break;
      case ']':
        bracketCount--;
        if (bracketCount < 0) {
          return false;
        }
        lastOpen = openStack.pop();
        if (lastOpen !== '[') {
          return false;
        }
        break;
    }
  }
  return (
    braceCount === 0 &&
    bracketCount === 0 &&
    parenCount === 0 &&
    openStack.length === 0
  );
};

export default isValid;
