var Dispatcher = require('Dispatcher');
var EventEmitter = require('events').EventEmitter;
var Actions = require('./Actions'),
    Music = require('./Music'),
    keyMirror = require('react/lib/keyMirror'),
    assign = require('object-assign');

var EVENTS = keyMirror({
  'KeyChanged': 'Store.KeyChanged'
});

var state = {
  tonic: randomTonic(),
  mode: randomMode()
};

var Store = assign({}, EventEmitter.prototype, {

  EVENTS: EVENTS,

  key: function() {
    return {
      tonic: state.tonic,
      mode: state.mode
    };
  },

  dispatcherIndex: Dispatcher.register((payload) => {
    var {source, type, data} = payload;

    switch(type) {
    case Actions.TYPES.RANDOM_KEY:
      state = randomKey();
      Store.emit(EVENTS.KeyChanged);
      break;
    }
  })
});

module.exports = Store;


/*** private ***/

function randomKey() {
  return {
    tonic: randomTonic(),
    mode: randomMode()
  };
}
function randomTonic() {
  var key = Math.floor(Math.random() * Music.Keys.length);
  return Music.Keys[key];
}

function randomMode() {
  var index = Math.floor(Math.random() * Music.Modes.length);
  return Music.Modes[index];
}
