# Graphing Calculator Library

Welcome to the Graphing Calculator Library — your solution for integrating advanced graphing and mathematical functions into educational platforms.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
  - [Development Tools](#development-tools)
- [Known Issues](#known-issues)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)

## Getting Started

These instructions will guide you through the setup to get the project running on your local machine.

### Prerequisites

Before you begin, ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

To install the library and run the demo, execute the following:

```bash
git clone https://github.com/david-ghulijanyan/graphing-calculator.git
cd graphing-calculator
npm install
cd demo
npm install
npm run dev
```

## Project Structure

Here's an overview of the main folders and files in the project:

- `__tests__`: Contains all test files for the project.
- `demo`: Houses the demonstration application for the library.
- `src`: The source code directory for the library with:
  - `components`: React components for graphing UI.
  - `utils`: Utility functions, including mathematical operations.
- `husky`: Configuration for Husky, used for managing Git hooks.

## Tech Stack

This library is built using a combination of technologies:

- **TypeScript**: For type-safe code and maintainability.
- **React**: For building the user interface components.
- **Recoil**: For state management within the application.

### Development Tools

- **ESLint**: Static code analysis tool for identifying problematic patterns in JavaScript code.
- **Babel**: JavaScript compiler that lets us use next-generation JavaScript, today.
- **Semantic Release**: Fully automated version management and package publishing tool.
- **Rollup**: Module bundler for JavaScript which compiles small pieces of code into something larger and more complex.
- **Prettier**: Opinionated code formatter that enforces a consistent style by parsing the code and re-printing it.
- **CommitLint**: Tool to enforce conventions for commit messages.
- **Husky**: Used to ensure that all commits meet the commit message conventions before allowing a commit.

## Known Issues

Current areas of focus include:

- Improving the Rollup configuration for optimal bundling.
- Ensuring the semantic release process is correctly configured.
- Considering moving the demo to a separate project.

## Versioning

We use [Semantic Versioning](http://semver.org/) for version management. For available versions, see the [releases on this repository](https://github.com/david-ghulijanyan/graphing-calculator/releases).

## Authors

- **David Ghulijanyan** - _Initial Creator_ - [david-ghulijanyan](https://github.com/david-ghulijanyan)

## License

This project is licensed under private License - see the [LICENSE.md](LICENSE) file for details.
