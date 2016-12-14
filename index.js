define(['dayum', './other-module'], function(dayum, otherModule) {
  return {
    message: 'I got a two-syllable ' + dayum.daaaaaaayum() + ' in that dress.',
    otherMessage: otherModule.message
  };
});
