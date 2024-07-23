# Usage

Run `npm test <solutionNumber> <JSONParams>` to run a solution.

- `<solutionNumber>` is any positive integer where a solution exists
- `<JSONParams>` is a valid JSON parameter (multiple parameters should be passed in quotes as an array)

For example, to test solution 1. using parameters `[1, 2, 3]`
and `5`, run this command:

```shell
npm test 1 "[[1, 2, 3], 5]"
```

## Adding Solutions

Adding solutions requires a specific format:

1. Create a directory with the solution number (e.g. `5` for solution 5.)
1. Create a file called `index.ts` inside the directory
1. `export` a `default` `function` in the directory

The `export`ed `function` can have any number of parameters,
and of any type, so long as they can be parsed from a JSON string
from the command line (see [Usage](#usage) above).

The directory acts as a sandbox for each solution
so they stay independent of one another.
