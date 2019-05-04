exports.parseForFirestore = function (chord2learn) {
  chord2learn = chord2learn.toLowerCase();
  var cleansingArray = chord2learn.split('');
  console.log("CA before: " + cleansingArray);
  for(var z = 0; z < cleansingArray.length; z++) {
    if(cleansingArray[z] == '.') {
      cleansingArray.splice(z,z);
    }
  }
  console.log("CA after: " + cleansingArray);
  var requestSplitArray = cleansingArray.join('').split(' ');

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


  requestSplitArray[0] = requestSplitArray[0].toUpperCase();
  chord2learn = requestSplitArray.join(' ');
  console.log("Before: " + requestSplitArray);
  for (var i = 0; i < requestSplitArray.length; i++) {
    requestSplitArray[i] = requestSplitArray[i].toLowerCase();
    requestSplitArray[i] = mods[requestSplitArray[i]];
  }

  return requestSplitArray.join('');
}

exports.parseChordResponse = function (chord2learn)  {
  chord2learn = chord2learn.toLowerCase();
  var cleansingArray = chord2learn.split('');
  console.log("CA before: " + cleansingArray);
  for(var z = 0; z < cleansingArray.length; z++) {
    if(cleansingArray[z] == '.') {
      cleansingArray.splice(z,z);
    }
  }
  console.log("CA after: " + cleansingArray);
  var requestSplitArray = cleansingArray.join('').split(' ');

  // The purpose of the mods object is to translate the chord2learn into something uniform that we can work with.
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

  var numConversions = {};
  numConversions[1] = 'first';
  numConversions[2] = 'second';
  numConversions[3] = 'third';
  numConversions[4] = 'fourth';
  numConversions[5] = 'fifth';
  numConversions[6] = 'sixth';
  numConversions[7] = 'seventh';
  numConversions[8] = 'eighth';
  numConversions[9] = 'ninth';


  // The chords object stores all of the chords in a numerical representation.
  // format: [startFret, fingersUsed, [String1[fret, finger]], [string2[fret,finger]], etc. to string4]
  var chords = {};
  //TODO Add all of the chord specifications from the Java program...
  // A Chords
  chords['A'] = [1, 2, [0, 0], [0, 0], [1, 1], [2, 1]];
  chords['Am'] = [1, 1, [0, 0], [0, 0], [0, 0], [2, 2]];
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

  // C Chords
  chords['C'] = [1, 1, [3, 2], [0, 0], [0, 0], [0, 0]];
  chords['Cm'] = [1, 3, [3, 3], [3, 2], [3, 1], [0, 0]];
  chords['Caug'] = [1, 2, [3, 3], [0, 0], [0, 0], [1, 1]];
  chords['Cdim'] = [1, 3, [3, 3], [2, 2], [3, 1], [0, 0]];
  chords['C7'] = [1, 1, [1, 1], [0, 0], [0, 0], [0, 0]];
  chords['Cm7'] = [1, 4, [3, 4], [3, 3], [3, 2], [3, 1]];
  chords['Cmaj7'] = [1, 1, [2, 2], [0, 0], [0, 0], [0, 0]];
  chords['C6'] = [1, 0, [0, 0], [0, 0], [0, 0], [0, 0]];
  chords['Cm6'] = [1, 4, [3, 4], [3, 3], [3, 2], [2, 1]];
  chords['Cadd9'] = [1, 3, [3, 3], [3, 2], [4, 1], [0, 0]];
  chords['Cm9'] = [2, 4, [4, 4], [2, 3], [2, 2], [4, 1]];
  chords['C9'] = [1, 2, [1, 2], [0, 0], [2, 1], [0, 0]];
  chords['Csus2'] = [1, 3, [3, 3], [3, 2], [2, 1], [0, 0]];
  chords['Csus4'] = [1, 2, [3, 3], [1, 1], [0, 0], [0, 0]];
  chords['C7sus4'] = [1, 2, [1, 2], [1, 1], [0, 0], [0, 0]];
  chords['C#'] = [1, 4, [4, 4], [1, 3], [1, 2], [1, 1]];

  // D Chords
  chords['Db'] = [1, 4, [4, 4], [1, 3], [1, 2], [1, 1]];
  chords['Dbm'] = [1, 4, [4, 4], [4, 3], [4, 2], [1, 1]];
  chords['Dbaug'] = [1, 3, [0, 0], [1, 3], [1, 2], [2, 1]];
  chords['Dbdim'] = [1, 2, [4, 4], [0, 0], [1, 1], [0, 0]];
  chords['Db7'] = [1, 4, [2, 4], [1, 3], [1, 2], [1, 1]];
  chords['Dbm7'] = [1, 3, [2, 3], [0, 0], [1, 2], [1, 1]];
  chords['Dbmaj7'] = [1, 4, [3, 4], [1, 3], [1, 2], [1, 1]];
  chords['Db6'] = [1, 4, [1, 4], [1, 3], [1, 2], [1, 1]];
  chords['Dbm6'] = [1, 3, [1, 4], [0, 0], [1, 2], [1, 1]];
  chords['Dbadd9'] = [1, 4, [4, 4], [1, 3], [3, 2], [1, 1]];
  chords['Dbm9'] = [1, 3, [4, 4], [0, 0], [3, 2], [1, 1]];
  chords['Db9'] = [1, 4, [2, 3], [1, 2], [3, 4], [1, 1]];
  chords['Dbsus2'] = [1, 4, [4, 4], [4, 3], [3, 2], [1, 1]];
  chords['Dbsus4'] = [1, 4, [4, 4], [2, 3], [1, 2], [1, 1]];
  chords['Db7sus4'] = [1, 4, [2, 4], [2, 3], [1, 2], [1, 1]];

  chords['D'] = [1, 3, [0, 0], [2, 3], [2, 2], [2, 1]];
  chords['Dm'] = [1, 3, [0, 0], [1, 1], [2, 3], [2, 2]];
  chords['Daug'] = [1, 4, [1, 1], [2, 3], [2, 2], [3, 4]];
  chords['Ddim'] = [1, 3, [0, 0], [1, 3], [2, 2], [1, 1]];
  chords['D7'] = [1, 4, [3, 4], [2, 3], [2, 2], [2, 1]];
  chords['Dm7'] = [1, 4, [3, 4], [1, 1], [2, 3], [2, 2]];
  chords['Dmaj7'] = [1, 4, [4, 4], [2, 3], [2, 2], [2, 1]];
  chords['D6'] = [1, 4, [2, 4], [2, 3], [2, 2], [2, 1]];
  chords['Dm6'] = [1, 4, [2, 4], [1, 3], [2, 2], [2, 1]];
  chords['Dadd9'] = [2, 4, [4, 4], [1, 3], [3, 2], [1, 1]];
  chords['Dm9'] = [2, 3, [4, 4], [0, 0], [4, 3], [1, 1]];
  chords['D9'] = [1, 4, [3, 4], [2, 2], [4, 3], [2, 1]];
  chords['Dsus2'] = [1, 2, [0, 0], [0, 0], [2, 2], [2, 1]];
  chords['Dsus4'] = [1, 2, [0, 0], [3, 2], [2, 1], [0, 0]];
  chords['D7sus4'] = [1, 4, [3, 4], [3, 3], [2, 2], [2, 1]];
  chords['D#'] = [1, 3, [1, 1], [3, 2], [3, 3], [0, 0]];

  // E Chords
  chords['Eb'] = [1, 3, [1, 1], [3, 2], [3, 3], [0, 0]];
  chords['Ebm'] = [1, 4, [1, 1], [2, 2], [3, 3], [3, 4]];
  chords['Ebaug'] = [1, 3, [2, 1], [3, 2], [3, 3], [0, 0]];
  chords['Ebdim'] = [1, 3, [0, 0], [2, 3], [3, 2], [2, 1]];
  chords['Eb7'] = [1, 4, [4, 4], [3, 3], [3, 2], [3, 1]];
  chords['Ebm7'] = [1, 4, [4, 4], [2, 3], [3, 2], [3, 1]];
  chords['Ebmaj7'] = [2, 4, [4, 4], [2, 3], [2, 2], [2, 1]];
  chords['Eb6'] = [1, 4, [3, 4], [3, 3], [3, 2], [3, 1]];
  chords['Ebm6'] = [1, 4, [3, 4], [2, 3], [3, 2], [3, 1]];
  chords['Ebadd9'] = [1, 3, [1, 3], [1, 2], [3, 1], [0, 0]];
  chords['Ebm9'] = [3, 3, [4, 4], [3, 3], [0, 0], [1, 1]];
  chords['Eb9'] = [1, 3, [1, 3], [1, 2], [1, 1], [0, 0]];
  chords['Ebsus2'] = [1, 4, [4, 4], [4, 3], [3, 2], [3, 1]];
  chords['Ebsus4'] = [1, 4, [1, 4], [4, 3], [3, 2], [1, 1]];
  chords['Eb7sus4'] = [2, 4, [3, 4], [3, 3], [2, 2], [2, 1]];

  chords['E'] = [1, 3, [2, 2], [0, 0], [4, 4], [1, 1]];
  chords['Em'] = [1, 3, [2, 1], [3, 2], [4, 3], [0, 0]];
  chords['Eaug'] = [1, 2, [3, 3], [0, 0], [0, 0], [1, 1]];
  chords['Edim'] = [1, 2, [1, 3], [0, 0], [1, 1], [0, 0]];
  chords['E7'] = [1, 3, [2, 3], [0, 0], [2, 2], [1, 1]];
  chords['Em7'] = [2, 3, [2, 3], [0, 0], [2, 2], [0, 0]];
  chords['Emaj7'] = [1, 3, [2, 2], [0, 0], [3, 3], [1, 1]];
  chords['E6'] = [1, 4, [4, 4], [4, 3], [4, 2], [4, 1]];
  chords['Em6'] = [1, 2, [2, 2], [0, 0], [1, 1], [0, 0]];
  chords['Eadd9'] = [1, 4, [2, 3], [2, 2], [4, 4], [1, 1]];
  chords['Em9'] = [1, 3, [2, 3], [2, 2], [4, 4], [0, 0]];
  chords['E9'] = [1, 4, [2, 4], [2, 3], [2, 2], [1, 1]];
  chords['Esus2'] = [1, 4, [2, 4], [2, 3], [4, 2], [4, 1]];
  chords['Esus4'] = [2, 4, [1, 4], [4, 3], [3, 2], [1, 1]];
  chords['E7sus4'] = [2, 4, [4, 4], [4, 3], [3, 2], [3, 1]];


  // Similar to mods, except this time we're translating our numerical data into spoken word.
  var fingerTranslator = {};
  fingerTranslator[1] = 'index';
  fingerTranslator[2] = 'middle';
  fingerTranslator[3] = 'ring';
  fingerTranslator[4] = 'pinky';

  // Iterates over each word in the requestSplitArray and translates it using the mods object.
  requestSplitArray[0] = requestSplitArray[0].toUpperCase();
  chord2learn = requestSplitArray.join(' ');
  console.log("Before: " + requestSplitArray);
  for (var i = 0; i < requestSplitArray.length; i++) {
    requestSplitArray[i] = requestSplitArray[i].toLowerCase();
    requestSplitArray[i] = mods[requestSplitArray[i]];
  }
  console.log(requestSplitArray);

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
  for(var j = 2; j < chordArray.length; j++) {
    if (chordArray[j][0] !== 0) {
      if ((j-1) == 1) {
        activeStrings.push(string1);
      }
      if ((j-1) == 2) {
        activeStrings.push(string2);
      }
      if ((j-1) == 3) {
        activeStrings.push(string3);
        }
      if ((j-1) == 4) {
        activeStrings.push(string4);
      }
    }
  }


  // Our base responses are basically just skeletons. There are four different ones to correspond with the number of fingers
  // required to play the chord.
  var baseResponse = [];

  if (fingersUsed == 1) {
    baseResponse = [
      'To play the ',
      chord2learn,
      ' chord, place your index finger on the ',
      numConversions[activeStrings[0].fret],
      ' fret of the ',
      activeStrings[0].id,
      ' string'
    ];
  } else if (fingersUsed == 2) {
    baseResponse = [
      'To play the ',
      chord2learn,
      ' chord, place your ',
      fingerTranslator[activeStrings[0].finger],
      ' finger on the ',
      numConversions[activeStrings[0].fret],
      ' fret of the ',
      activeStrings[0].id,
      ' string, and put your ',
      fingerTranslator[activeStrings[1].finger],
      ' finger on the ',
      numConversions[activeStrings[1].fret],
      ' fret of the ',
      activeStrings[1].id,
      ' string'
    ];
  } else if (fingersUsed == 3) {
      baseResponse = [
        'To play the ',
        chord2learn,
        ' chord, place your ',
        fingerTranslator[activeStrings[0].finger],
        ' finger on the ',
        numConversions[activeStrings[0].fret],
        ' fret of the ',
        activeStrings[0].id,
        ' string, place your ',
        fingerTranslator[activeStrings[1].finger],
        ' finger on the ',
        numConversions[activeStrings[1].fret],
        ' fret of the ',
        activeStrings[1].id,
        ' string, and place your ',
        fingerTranslator[activeStrings[2].finger],
        ' finger on the ',
        numConversions[activeStrings[2].fret],
        ' fret of the ',
        activeStrings[1].id,
        ' string'
  ];
  } else if (fingersUsed == 4) {
      baseResponse = [
        'To play the ',
        chord2learn,
        ' chord, place your ',
        fingerTranslator[activeStrings[0].finger],
        ' finger on the ',
        numConversions[activeStrings[0].fret],
        ' fret of the ',
        activeStrings[0].id,
        ' string, put your ',
        fingerTranslator[activeStrings[1].finger],
        ' finger on the ',
        numConversions[activeStrings[1].fret],
        ' fret of the ',
        activeStrings[1].id,
        ' string, put your ',
        fingerTranslator[activeStrings[2].finger],
        ' finger on the ',
        numConversions[activeStrings[2].fret],
        ' fret of the ',
        activeStrings[2].id,
        ' string, and put your ',
        fingerTranslator[activeStrings[3].finger],
        ' finger on the ',
        numConversions[activeStrings[3].fret],
        ' fret of the ',
        activeStrings[3].id,
        ' string'
  ];
  }

  var algResponse = baseResponse.join('');

  return algResponse;

};