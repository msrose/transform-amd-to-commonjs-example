# transform-amd-to-commonjs-example

[![dependencies Status](https://david-dm.org/msrose/transform-amd-to-commonjs-example/status.svg)](https://david-dm.org/msrose/transform-amd-to-commonjs-example)
[![devDependencies Status](https://david-dm.org/msrose/transform-amd-to-commonjs-example/dev-status.svg)](https://david-dm.org/msrose/transform-amd-to-commonjs-example?type=dev)

Example usage of [babel-plugin-transform-amd-to-commonjs](https://github.com/msrose/babel-plugin-transform-amd-to-commonjs).

Uses [babel-plugin-transform-amd-to-commonjs](https://github.com/msrose/babel-plugin-transform-amd-to-commonjs) to allow [jest](https://facebook.github.io/jest/) to require AMD files.

With this particular setup, we have webpack bundling the AMD files, using the webpack config. Using similar jest config options (in package.json), we can resolve modules, and let jest require them using the transform-amd-to-commonjs plugin. The .babelrc env config ensures that the AMD to CommonJS transform is only done in test mode.

TODO: Share alias/module path/etc. config between webpack and jest (and probably RequireJS). Is there a better way than programmatically writing the jest config before a test run?

TODO: How will jest handle RequireJS shims and other webpack loaders?

```
git clone https://github.com/msrose/transform-amd-to-commonjs-example
cd transform-amd-to-commonjs-example
npm install
npm run webpack
npm test
```
