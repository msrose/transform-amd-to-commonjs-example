define(['dayum', './other-module', 'another-module', 'module-alias'], function(dayum, otherModule, another, aliased) {
  return {
    message: 'I got a two-syllable ' + dayum.daaaaaaayum() + ' in that dress.',
    otherMessage: otherModule.message,
    anotherMessage: another.message,
    aliasedMessage: aliased.message
  };
});
