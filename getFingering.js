export function getFingering(chordRequest) {
	var requestSplitArray = chordRequest.split(' ');
	var mods = {};
	mods['major'] = 'maj';
	mods['minor'] = 'm';
	mods['augmented'] = 'aug';
	mods['diminished'] = 'dim';
	mods['suspend'] = 'sus';
	mods['add'] = 'add';
	mods['9th'] = '9';
	mods['7th'] = '7';
	mods['6th'] = '6';
	mods['4th'] = '4';
	mods['2nd'] = '2';
	mods['a'] = 'A';
	mods['b'] = 'B';
	mods['c'] = 'C';
	mods['d'] = 'D';
	mods['e'] = 'E';
	mods['f'] = 'F';
	mods['g'] = 'G';
	mods['sharp'] = '#';
	mods['flat'] = 'b';
	mods[1] = 'first';
	mods[2] = 'second';
	mods[3] = 'third';
	mods[4] = 'fifth';


	var chords = {};
	//TODO Add all of the chord specifications from the Java program...
	chords['A'] = [1, 2, [3, 1], [4, 2], [0, 0], [0, 0]];
	chords['Am'] = [1, 1, [0, 0], [4, 2], [0, 0], [0, 0]];
	chords['Aaug'] = [1, 4, [4, 2], [3, 3], [2, 1], [1, 4]];
	chords['Adim'] = [1, 4, [4, 2], [3, 3], [2, 2], [1, 3]];
	chords['A7'] = [1, 1, [3, 1], [0, 0], [0, 0], [0, 0]];
	chords['Am7'] = [1, 0, [0, 0], [0, 0], [0, 0], [0, 0]];
	chords['Amaj7'] = [1, 2, [4, 1], [3, 1], [0, 0], [0, 0]];
	chords['A6'] = [1, 3, [3, 1], [4, 2], [2, 2], [0, 0]];
	chords['Am6'] = [1, 2, [4, 2], [2, 2], [0, 0], [0, 0]];
	chords['Aadd9'] = [1, 3, [3, 1], [4, 2], [1, 2], [0, 0]];
	chords['Am9'] = [1, 2, [4, 2], [0, 0], [0, 0], [1, 2]];
	chords['A9'] = [1, 2, [3, 1], [1, 2], [0, 0], [0, 0]];
	chords['Asus2'] = [2, 4, [4, 1], [1, 1], [3, 3], [2, 4]];
	chords['Asus4'] = [1, 2, [4, 2], [3, 2], [0, 0], [0, 0]];
	chords['A7sus4'] = [1, 1, [3, 2], [0, 0], [0, 0], [0, 0]];

	for (var i = 0; i < requestSplitArray.length; i++) {
		requestSplitArray[i] = mods[requestSplitArray[i]];
	}

	var chordArray = chords[requestSplitArray.join('')];

	var chordName = requestSplitArray.join('');
	var startFret = chordArray[0];
	var fingersUsed = chordArray[1];

	var string1 = {};
	string1.fret = chordArray[2][0];
	string1.finger = chordArray[2][1];
	string1.id = 'first';

	var string2 = {};
	string2.fret = chordArray[3][0];
	string2.finger=chordArray[3][1];
	string2.id = 'second';

	var string3 = {};
	string3.fret = chordArray[4][0];
	string3.finger = chordArray[4][1];
	string3.id = 'third';

	var string4 = {};
	string4.fret = chordArray[5][0];
	string4.finger = chordArray[5][1];
	string4.id = 'fourth';

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



	var baseResponse1 = [
		'To play the ',
		chordRequest,
		' chord, place your index finger on the ',
		mods[activeStrings[0].fret],
		' fret of the ',
		mods[activeStrings[0].id],
		' string',
	];
	var baseResponse2 = [
		'To play the ',
		null,
		' chord, place your ',
		null,
		' finger on the ',
		null,
		' fret of the ',
		null,
		' string, and put your ',
		null,
		' finger on the ',
		null,
		' fret of the ',
		null,
		' string',
	];
	var baseResponse3 = [
		'To play the ',
		null,
		' chord, place your ',
		null,
		' finger on the ',
		null,
		' fret of the ',
		null,
		'string, put your ',
		null,
		' finger on the ',
		null,
		' fret of the ',
		null,
		' string, and put your ',
		null,
		' finger on the ',
		null,
		' fret of the ',
		null,
		' string',
	];
	var baseResponse4 = [
		'To play the ',
		null,
		' chord, place your ',
		null,
		' finger on the ',
		null,
		' fret of the ',
		null,
		'string, put your ',
		null,
		' finger on the ',
		null,
		' fret of the ',
		null,
		' string, put your ',
		null,
		' finger on the ',
		null,
		' fret of the ',
		null,
		' string, and put your ',
		null,
		' finger on the ',
		null,
		' fret of the ',
		null,
		' string',
	];

	var baseResponses = [baseResponse1, baseResponse2, baseResponse3, baseResponse4];

	 return baseResponses[fingersUsed-1].join('');
}
