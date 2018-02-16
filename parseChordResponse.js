exports.parseChordResponse = function (chord2learn)  {
   chord2learn = chord2learn.toLowerCase();
  var requestSplitArray = chord2learn.split(' ');

  // The purpose of the mods object is to translate the chordRequest into something uniform that we can work with.
  var mods = {};
  mods['major'] = 'maj';
  mods['minor'] = 'm';
  mods['augmented'] = 'aug';
  mods['diminished'] = 'dim';
  mods['suspended'] = 'sus';
  mods['add'] = 'add';
  mods['9th'] = '9';
  mods['7th'] = '7';
  mods['6th'] = '6';
  mods['4th'] = '4';
  mods['2nd'] = '2';
  mods['second'] = '2';
  mods['a'] = 'A';
  mods['b'] = 'B';
  mods['c'] = 'C';
  mods['d'] = 'D';
  mods['e'] = 'E';
  mods['f'] = 'F';
  mods['g'] = 'G';
  mods['A'] = 'A';
	mods['B'] = 'B';
	mods['C'] = 'C';
	mods['D'] = 'D';
	mods['E'] = 'E';
	mods['F'] = 'F';
	mods['G'] = 'G';
  mods['sharp'] = '#';
  mods['flat'] = 'b';
  mods[1] = 'first';
  mods[2] = 'second';
  mods[3] = 'third';
  mods[4] = 'fourth';
  mods[5] = 'fifth';
  mods[6] = 'sixth';
  mods[7] = 'seventh';
  mods[8] = 'eighth';
  mods[9] = 'ninth';


  // The chords object stores all of the chords in a numerical representation.
  // format: [startFret, fingersUsed, [String1[fret, finger]], [string2[fret,finger]], etc. to string4]
  var chords = {};
  //TODO Add all of the chord specifications from the Java program...
  // A Chords
  chords['A'] = [1, 2, [0, 0], [0, 0], [1, 1], [2, 1]];
    chords['Am'] = [1, 1, [0, 0], [0, 0], [0, 0], [2, 1]];
    chords['Aaug'] = [1, 4, [4, 4], [1, 2], [1, 1], [2, 3]];
    chords['Adim'] = [1, 4, [3, 4], [2, 2], [3, 3], [2, 1]];
    chords['A7'] = [1, 1, [0, 0], [0, 0], [1, 1], [0, 0]];
    chords['Am7']= [1, 0, [0, 0], [0, 0], [0, 0], [0, 0]];
    chords['Amaj7'] = [1, 2, [0, 0], [0, 0], [1, 2], [1, 1]];
    chords['A6'] = [1, 3, [0, 0], [2, 3], [1, 2], [2, 1]];
    chords['Am6'] = [1, 2, [0, 0], [2, 2], [0, 0], [2, 1]];
    chords['Aadd9'] = [1, 3, [2, 4], [0, 0], [1, 1], [2, 2]];
    chords['Am9'] = [1, 2, [2, 3], [0, 0], [0, 0], [2, 1]];
    chords['A9'] = [1, 2, [2, 2], [0, 0], [1, 1], [0, 0]];
    chords['Asus2'] = [2, 4, [1, 2], [4, 4], [3, 3], [1, 1]];
    chords['Asus4'] = [1, 2, [0, 0], [0, 0], [2, 2], [2, 1]];
    chords['A7sus4'] = [1, 1, [0, 0], [0, 0], [2, 1], [0, 0]];

    chords['A#'] = [1, 4, [1, 2], [1, 1], [2, 3], [3, 4]];
    chords['A#m'] = [1, 4, [1, 1], [1, 1], [1, 1], [3, 3]];
    chords['A#aug'] = [1, 4, [1, 1], [2, 3], [2, 2], [3, 4]];
    chords['A#dim'] = [1, 3, [1, 2], [0, 0], [1, 1], [3, 3]];
    chords['A#7'] = [1, 4, [1, 1], [1, 1], [2, 3], [1, 1]];
    chords['A#m7'] = [1, 4, [1, 1], [1, 1], [1, 1], [1, 1]];
    chords['A#maj7'] = [1, 3, [0, 0], [1, 1], [2, 2], [3, 3]];
    chords['A#6'] = [1, 3, [1, 1], [1, 1], [2, 2], [0, 0]];
    chords['A#m6'] = [1, 4, [1, 2], [3, 4], [1, 1], [3, 3]];
    chords['A#add9'] = [1, 4, [3, 4], [1, 1], [2, 2], [3, 3]];
    chords['A#m9'] = [1, 4, [3, 4], [1, 1], [1, 1], [3, 3]];
    chords['A#9'] = [1, 4, [3, 4], [4, 3], [2, 1], [3, 2]];
    chords['A#sus2'] = [1, 3, [1, 1], [1, 1], [0, 0], [3, 3]];
    chords['A#sus4'] = [1, 4, [1, 1], [1, 1], [3, 4], [3, 3]];
    chords['A#7sus4'] = [1, 4, [1, 1], [1, 1], [3, 3], [1, 1]];

    // B Chords
    chords['Bb'] = [1, 4, [1, 2], [1, 1], [2, 3], [3, 4]];
    chords['Bbm'] = [1, 4, [1, 1], [1, 1], [1, 1], [3, 3]];
    chords['Bbaug'] = [1, 4, [1, 1], [2, 3], [2, 2], [3, 4]];
    chords['Bbdim'] = [1, 3, [1, 2], [0, 0], [1, 1], [3, 3]];
    chords['Bb7'] = [1, 4, [1, 1], [1, 1], [2, 3], [1, 1]];
    chords['Bbm7'] = [1, 4, [1, 1], [1, 1], [1, 1], [1, 1]];
    chords['Bbmaj7'] = [1, 3, [0, 0], [1, 1], [2, 2], [3, 3]];
    chords['Bb6'] = [1, 3, [1, 1], [1, 1], [2, 2], [0, 0]];
    chords['Bbm6'] = [1, 4, [1, 2], [3, 4], [1, 1], [3, 3]];
    chords['Bbadd9'] = [1, 4, [3, 4], [1, 1], [2, 2], [3, 3]];
    chords['Bbm9'] = [1, 4, [3, 4], [1, 1], [1, 1], [3, 3]];
    chords['Bb9'] = [1, 4, [3, 4], [4, 3], [2, 1], [3, 2]];
    chords['Bbsus2'] = [1, 3, [1, 1], [1, 1], [0, 0], [3, 3]];
    chords['Bbsus4'] = [1, 4, [1, 1], [1, 1], [3, 4], [3, 3]];
    chords['Bb7sus4'] = [1, 4, [1, 1], [1, 1], [3, 3], [1, 1]];

    chords['B'] = [1, 4, [2, 1], [2, 1], [3, 3], [4, 4]];
    chords['Bm'] = [1, 4, [2, 1], [2, 1], [2, 1], [4, 3]];
    chords['Baug'] = [1, 4, [2, 2], [1, 1], [2, 3], [4, 4]];
    chords['B7'] = [1, 4, [2, 1], [2, 1], [3, 3], [2, 1]];
    chords['Bm7'] = [1, 4, [2, 1], [2, 1], [2, 1], [2, 1]];
    chords['Bmaj7'] = [1, 4, [1, 1], [2, 2], [3, 3], [4, 4]];
    chords['B6'] = [1, 4, [2, 3], [2, 3], [3, 4], [1, 1]];
    chords['Bm6'] = [1, 4, [2, 3], [2, 3], [2, 3], [1, 1]];
    chords['Badd9'] = [1, 4, [4, 4], [2, 1], [3, 2], [4, 3]];
    chords['Bm9'] = [1, 3, [2, 5], [0, 0], [1, 2], [2, 1]];
    chords['B9'] = [2, 4, [3, 4], [4, 3], [2, 1], [3, 2]];
    chords['Bsus2'] = [1, 4, [2, 2], [2, 2], [1, 1], [4, 4]];
    chords['Bsus4'] = [1, 4, [2, 1], [2, 1], [4, 4], [4, 3]];
    chords['B7sus4'] = [1, 4, [2, 1], [2, 1], [4, 3], [2, 1]];


  // Similar to mods, except this time we're translating our numerical data into spoken word.
  var fingerTranslator = {};
  fingerTranslator[1] = 'index';
  fingerTranslator[2] = 'middle';
  fingerTranslator[3] = 'ring';
  fingerTranslator[4] = 'pinky';

  // Iterates over each word in the requestSplitArray and translates it using the mods object.
  requestSplitArray[0] = requestSplitArray[0].toUpperCase();
  chord2learn = requestSplitArray.join(' ');
  for (var i = 0; i < requestSplitArray.length; i++) {
    requestSplitArray[i] = mods[requestSplitArray[i]];
  }


  // Grabs the chord in question from the chords object
  var chordArray = chords[requestSplitArray.join('')];

  var chordName = requestSplitArray.join('');
  var startFret = chordArray[0];
  var fingersUsed = chordArray[1];

  // Each string is represented as an object. The fret field is offset by the startFret to allow for easier data entry.
  var string1 = {};
  string1.fret = chordArray[2][0] + (startFret - 1);
  string1.finger = chordArray[2][1];
  string1.id = 'first';

  var string2 = {};
  string2.fret = chordArray[3][0] + (startFret - 1);
  string2.finger=chordArray[3][1];
  string2.id = 'second';

  var string3 = {};
  string3.fret = chordArray[4][0] + (startFret - 1);
  string3.finger = chordArray[4][1];
  string3.id = 'third';

  var string4 = {};
  string4.fret = chordArray[5][0] + (startFret - 1);
  string4.finger = chordArray[5][1];
  string4.id = 'fourth';

  // In order to articulate the fingering correctly, we need to know which strings will have fingers on them.
  // This loop iterates through the chordArray (but only the strings) and adds them to the array if they contain anything other than zeros.
  var activeStrings = [];
  for(var i = 2; i < chordArray.length; i++) {
    if (chordArray[i] !== 0) {
      if ((i-1) == 1) {
        activeStrings.push(string1);
      }
      if ((i-1) == 2) {
        activeStrings.push(string2);
      }
      if ((i-1) == 3) {
        activeStrings.push(string3);
        }
      if ((i-1) == 4) {
        activeStrings.push(string4);
      }
    }
  }


  // Our base responses are basically just skeletons. There are four different ones to correspond with the number of fingers
  // required to play the chord.
  var baseResponse1 = [
    'To play the ',
    chord2learn,
    ' chord, place your index finger on the ',
    mods[activeStrings[0].fret],
    ' fret of the ',
    activeStrings[0].id,
    ' string',
  ];
  var baseResponse2 = [
    'To play the ',
    chord2learn,
    ' chord, place your ',
    fingerTranslator[activeStrings[0].finger],
    ' finger on the ',
    mods[activeStrings[0].fret],
    ' fret of the ',
    activeStrings[0].id,
    ' string, and place your ',
    fingerTranslator[activeStrings[1].finger],
    ' finger on the ',
    mods[activeStrings[1].fret],
    ' fret of the ',
    activeStrings[1].id,
    ' string',
  ];
  var baseResponse3 = [
    'To play the ',
    chord2learn,
    ' chord, place your ',
    fingerTranslator[activeStrings[0].finger],
    ' finger on the ',
    mods[activeStrings[0].fret],
    ' fret of the ',
    activeStrings[0].id,
    'string, place your ',
    fingerTranslator[activeStrings[1].finger],
    ' finger on the ',
    mods[activeStrings[1].fret],
    ' fret of the ',
    activeStrings[1].id,
    ' string, and place your ',
    fingerTranslator[activeStrings[2].finger],
    ' finger on the ',
    mods[activeStrings[2].fret],
    ' fret of the ',
    activeStrings[1].id,
    ' string',
  ];
  var baseResponse4 = [
    'To play the ',
    chord2learn,
    ' chord, place your ',
    fingerTranslator[activeStrings[0].finger],
    ' finger on the ',
    mods[activeStrings[0].fret],
    ' fret of the ',
    activeStrings[0].id,
    ' string, place your ',
    fingerTranslator[activeStrings[1].finger],
    ' finger on the ',
    mods[activeStrings[1].fret],
    ' fret of the ',
    activeStrings[1].id,
    ' string, place your ',
    fingerTranslator[activeStrings[2].finger],
    ' finger on the ',
    mods[activeStrings[2].fret],
    ' fret of the ',
    activeStrings[2].id,
    ' string, and place your ',
    fingerTranslator[activeStrings[3].finger],
    ' finger on the ',
    mods[activeStrings[3].fret],
    ' fret of the ',
    activeStrings[3].id,
    ' string',
  ];

  // Chooses which baseResponse to use, and stores the full string in algResponse.
  var baseResponses = [baseResponse1, baseResponse2, baseResponse3, baseResponse4];
  var algResponse = baseResponses[fingersUsed-1].join('');

  return algResponse;

}
