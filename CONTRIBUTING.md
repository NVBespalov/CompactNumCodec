# Contributing to Sequences

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## Development Environment Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/NVBespalov/CompactNumCodec/sequences.git`
3. Install dependencies: `npm install`
4. Create a branch for your changes: `git checkout -b feature/your-feature-name`

### Prerequisites

- Node.js (LTS version recommended)
- npm package manager

## Development Workflow

1. Make your changes
2. Ensure code formatting: `npm run format`
3. Run linting: `npm run lint`
4. Run tests: `npm run test`
5. Commit your changes following our commit message conventions

## Coding Standards

- Write code in TypeScript
- Follow the existing code style (enforced by ESLint and Prettier)
- Include appropriate tests for new features
- Maintain test coverage
- Document new code using JSDoc comments

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure all tests pass and code is properly formatted
3. Update any relevant documentation
4. The PR will be merged once you have the sign-off of at least one maintainer

## Commit Message Guidelines

Format: `<type>(<scope>): <subject>`

`<type>` (required):

* feat: New feature or enhancement
* fix: Bug fix
* docs: Documentation changes only
* style: Code style/formatting changes (no functionality change)
* refactor: Code changes that neither fix bugs nor add features
* test: Adding or modifying tests
* chore: Build process, tooling or dependency updates

`<scope>` (optional):

* Module/component name affected
* Can be omitted if change spans multiple areas

`<subject>` (required):

* Clear, concise description
* Written in imperative present tense
* No period at the end
* Max 70 characters

## Testing

- Write unit tests for new features
- Maintain or improve code coverage
- Run `npm run test` before submitting PRs
- Tests should be meaningful and cover edge cases

## Issues

We use GitHub issues to track public bugs. Report a bug by opening a new issue.

## License

By contributing, you agree that your contributions will be licensed under its ISC License.
