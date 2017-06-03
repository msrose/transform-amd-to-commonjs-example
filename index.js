define([
  'dayum', './other-module', 'another-module', 'module-alias', './config-module'
], function(dayum, otherModule, another, aliased, config) {
  return {
    message: 'I got a two-syllable ' + dayum.daaaaaaayum() + ' in that dress.',
    otherMessage: otherModule.message,
    anotherMessage: another.message,
    aliasedMessage: aliased.message,
    config: config.message
  };
});
