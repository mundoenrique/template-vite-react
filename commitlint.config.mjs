/**
 * See the "Commit Message Convention" section in the README for rules, examples, and best practices.
 *
 * Allowed commit types for this project, following Conventional Commits best practices:
 * - feat:     A new feature
 * - fix:      A bug fix
 * - docs:     Documentation only changes
 * - style:    Changes that do not affect the meaning of the code (formatting, etc.)
 * - refactor: Code changes that neither fix a bug nor add a feature
 * - perf:     Code changes that improve performance
 * - test:     Adding or correcting tests
 * - chore:    Changes to the build process or auxiliary tools and libraries
 * - ci:       Changes to CI configuration files and scripts
 * - build:    Changes that affect the build system or external dependencies
 * @see https://www.conventionalcommits.org/en/v1.0.0
 * @see https://www.conventionalcommits.org/es/v1.0.0
 */
const commitLintConfig = {
  extends: ['@commitlint/config-conventional'],
  /**
   * Custom rules for commit messages.
   * This configuration enforces the use of specific commit types.
   * @see https://commitlint.js.org/reference/rules
   */
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'ci', 'build']],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-min-length': [2, 'always', 3],
    'scope-max-length': [2, 'always', 20],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-min-length': [2, 'always', 6],
    'header-max-length': [2, 'always', 100],
    'header-trim': [2, 'always'],
    'body-leading-blank': [2, 'always'],
    'body-full-stop': [2, 'always', '.'],
    'body-min-length': [2, 'always', 10],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'footer-min-length': [2, 'always', 10],
  },
};

export default commitLintConfig;
