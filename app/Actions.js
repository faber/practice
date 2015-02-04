var Dispatcher = require('Dispatcher'),
    km = require('react/lib/keyMirror');

module.exports = {
  TYPES: km({
    RANDOM_KEY: null
  }),

  randomKey: function() {
    Dispatcher.dispatchViewAction(this.TYPES.RANDOM_KEY);
  }
};
