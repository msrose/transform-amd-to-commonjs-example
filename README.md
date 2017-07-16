# transform-amd-to-commonjs-example

[![dependencies Status](https://david-dm.org/msrose/transform-amd-to-commonjs-example/status.svg)](https://david-dm.org/msrose/transform-amd-to-commonjs-example)
[![devDependencies Status](https://david-dm.org/msrose/transform-amd-to-commonjs-example/dev-status.svg)](https://david-dm.org/msrose/transform-amd-to-commonjs-example?type=dev)

Example usage of [babel-plugin-transform-amd-to-commonjs](https://github.com/msrose/babel-plugin-transform-amd-to-commonjs), demonstrating how to get [jest](https://facebook.github.io/jest/) to require AMD files.

## Relevant Files

- **webpack.config.js**: The source of truth for where to resolve modules, and any module aliases
- **jest.config.js**: Jest needs to know how to resolve modules and aliases, so it reads the webpack config for this information
- **.babelrc**: Enables babel-plugin-transform-amd-to-commonjs in the test environment only (babel-jest needs to know about the babel config as well, so you can't put the babel config in webpack.config.js.)

TODO: How will jest handle RequireJS shims and other webpack loaders?

```
git clone https://github.com/msrose/transform-amd-to-commonjs-example
cd transform-amd-to-commonjs-example
npm install
npm run webpack
npm test
```
