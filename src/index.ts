(async () => {
  const solutionNumber = process.argv[2];
  const solution = (await import(`./${solutionNumber}/index.ts`)).default;
  const hasNoParams = process.argv.length <= 3;
  const args = hasNoParams ? [] : JSON.parse(process.argv[3]);
  console.log(solution(...args));
})();
