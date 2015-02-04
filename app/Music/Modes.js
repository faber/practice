var assign = require('object-assign');

function Mode(number, label, specs) {
  this.number = number;
  this.label = label,
  this.triad = specs.shift();
  this.quad = specs.shift();
  this.variations = specs.shift();

  this.short = function() {
    return this.triad;
  };
}

var MusicModes = [
  new Mode(1, 'ionian', ['M', 'maj7']),
  new Mode(2, 'dorian', ['m', 'm7', 'b6']),
  new Mode(3, 'phrygian', ['m', 'm7', 'b9']),
  new Mode(4, 'lydian', ['M', 'maj7', 'b5']),
  new Mode(5, 'mixolydian', ['M', 'M7']),
  new Mode(6, 'aeolian', ['m', 'm7']),
  new Mode(7, 'locrian', ['dim', 'm7'])
];

// assign(MusicModes, {
//   IONIAN: MusicModes[1],
//   DORIAN: MusicModes[2],
//   PHRYGIAN: MusicModes[3],
//   LYDIAN: MusicModes[4],
//   MIXOLYDIAN: MusicModes[5],
//   AEOLIAN: MusicModes[6],
//   LOCRIAN: MusicModes[7]
// });

module.exports = MusicModes;
