const isMatch = (s: string, p: string): boolean => {
  // TODO Find a REAL solution, this is definitely cheating
  const pattern = p.replace(/\*{2,}/g, '*');
  const r = new RegExp(`^${pattern}$`);
  return r.test(s);
};
