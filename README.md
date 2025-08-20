# Vitest Usage Project
This repository demonstrates the usage of Vitest (https://vitest.dev/) with pnpm.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [package.json example](#packagejson-example)
- [Getting Help](#getting-help)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/vitest-usage.git
    ```
2. Navigate into the project directory:
    ```bash
    cd vitest-usage
    ```
3. Install dependencies using pnpm:
    ```bash
    pnpm install
    ```

## Usage

Add a test script to package.json so pnpm can run Vitest via the standard "test" command. Once the script is present you can run tests with the short form `pnpm test` (equivalent to `pnpm run test`).

Common commands:
- Run tests once:
  ```bash
  pnpm test
  ```
- Run tests in watch mode:
  ```bash
  pnpm test -- --watch
  ```
- Run tests with coverage:
  ```bash
  pnpm test -- --coverage
  ```
- Pass additional Vitest CLI options after `--`, e.g. run a single test file:
  ```bash
  pnpm test -- path/to/my.test.ts
  ```

## package.json example

Add or update the scripts section in your package.json:

```json
{
  "scripts": {
    "test": "vitest"
  },
  "devDependencies": {
    "vitest": "^latest"
  }
}
```

Explanation:
- The "test" script maps the npm script name to the Vitest CLI. Running `pnpm test` executes `vitest`.
- Use `pnpm test -- <args>` to forward CLI arguments to Vitest (for watch, coverage, selecting tests, etc.).

## Getting Help

For assistance or issues, file an issue on the GitHub repository or contact the maintainer.

## License

This project is open source and available under the terms of the [MIT License](LICENSE).

## Running Tests

To run the tests, execute:
```bash
pnpm run test
```


## Getting Help

For assistance or issues, please file an issue on the GitHub repository or contact the maintainer.

## License

This project is open source and available under the terms of the [MIT License](LICENSE).