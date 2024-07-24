const getColumnsAndZigs = (
  s: string,
  numRows: number
): [Array<string>, Array<string>] => {
  const columns: Array<string> = [];
  const zigs: Array<string> = [];
  let column = '';
  // TODO Speed this up using substring
  for (let i = 0; i < s.length; i++) {
    column += s[i];
    if (column.length === numRows) {
      // Add column
      columns.push(column);
      column = '';

      // Get zig
      let zig = '';
      for (let j = i + 1; j < i + numRows - 1; j++) {
        zig += s?.[j] || '';
      }
      // Fill zig to get a full zag up to the next column, if it exists;
      // doing this makes for a consistent approach
      // when dealing with them in the convert function
      zig = zig.padEnd(numRows - 2, ' ');
      zigs.push(zig.split('').reverse().join(''));
      i += numRows - 2;
    }
  }
  if (column !== '') {
    columns.push(column);
  }
  return [columns, zigs];
};

/**
 * 1 (0)
 *
 * 1 2 3 4 5 6 7 8 9 0
 *
 * 1234567890
 *
 *
 * 2 (2)
 *
 * 1 3 5 7 9
 * 2 4 6 8 0
 *
 * 13579 24680
 *
 *
 * 3 (4)
 *
 * 1   5   9
 * 2 4 6 8 0
 * 3   7
 *
 * 159 24680 37
 *
 *
 * 4 (6)
 *
 * 1     7
 * 2   6 8
 * 3 5   9
 * 4     0
 *
 * 17 268 359 40
 *
 *
 * 5 (8)
 *
 * 1       9
 * 2     8 0
 * 3   7
 * 4 6
 * 5
 *
 * 19 280 37 46 5
 *
 */

const convert = (s: string, numRows: number): string => {
  if (numRows < 2 || numRows >= s.length) {
    return s;
  }
  let newS = '';
  const build = (char: string): void => {
    if (char === ' ') {
      return;
    }
    newS += char;
  };
  const [columns, zigs] = getColumnsAndZigs(s, numRows);
  for (let i = 0; i < columns.length; i++) {
    build(columns?.[i]?.[0] || '');
  }
  for (let j = 1; j < numRows - 1; j++) {
    for (let i = 0; i < columns.length; i++) {
      build(columns?.[i]?.[j] || '');
      build(zigs?.[i]?.[j - 1] || '');
    }
  }
  for (let i = 0; i < columns.length; i++) {
    build(columns?.[i]?.[columns[0].length - 1] || '');
  }
  return newS;
};

export default convert;
