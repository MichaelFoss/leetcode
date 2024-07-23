(async () => {
  const args: Array<string> = process.argv.slice(2);
  const solutionNumber = args.shift();
  const solution = (await import(`./${solutionNumber}/index.ts`)).default;
  const hasNoParams = args.length === 0;
  let params = hasNoParams ? [] : JSON.parse(args[0]);
  if (!Array.isArray(params)) {
    params = [params];
  }
  console.log(solution(...params));
})();
