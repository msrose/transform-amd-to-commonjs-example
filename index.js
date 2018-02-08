define([
  'dayum',
  './other-module',
  'another-module',
  'module-alias',
  './config-module',
  './double-export-module',
  './other-double-export-module',
  './arrow-function-module',
  './arrow-function-implicit-return'
], function(
  dayum,
  otherModule,
  another,
  aliased,
  config,
  doubleExport,
  otherDoubleExport,
  arrowFunction,
  implicitReturn
) {
  return {
    message: 'I got a two-syllable ' + dayum.daaaaaaayum() + ' in that dress.',
    otherMessage: otherModule.message,
    anotherMessage: another.message,
    aliasedMessage: aliased.message,
    config: config.message,
    doubleExport: doubleExport.result,
    otherDoubleExport: otherDoubleExport.result,
    arrowFunction: arrowFunction.message,
    implicitReturn: implicitReturn.message
  };
});
