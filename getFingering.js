export function getFingering(chordRequest) {
var requestSplitArray = chordRequest.split(' ');
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
mods[4] = 'fourth';
mods[5] = 'fifth';
mods[6] = 'sixth';
mods[7] = 'seventh';
mods[8] = 'eighth';
mods[9] = 'ninth';



var chords = {};
//TODO Add all of the chord specifications from the Java program...
chords['B7sus4'] = [1, 4, [2, 4], [2, 3], [4, 2], [2, 1]];
chords['Asus2'] = [2, 4, [1, 2], [4, 4], [3, 3], [1, 1]];


var fingerTranslator = {};
fingerTranslator[1] = 'index';
fingerTranslator[2] = 'middle';
fingerTranslator[3] = 'ring';
fingerTranslator[4] = 'pinky';


for (var i = 0; i < requestSplitArray.length; i++) {
	requestSplitArray[i] = mods[requestSplitArray[i]];
}

var chordArray = chords[requestSplitArray.join('')];

var chordName = requestSplitArray.join('');
var startFret = chordArray[0];
var fingersUsed = chordArray[1];

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
	activeStrings[0].id,
	' string',
];
var baseResponse2 = [
	'To play the ',
	chordRequest,
	' chord, place your ',
	fingerTranslator[activeStrings[0].finger],
	' finger on the ',
	mods[activeStrings[0].fret],
	' fret of the ',
	activeStrings[0].id,
	' string, and put your ',
	fingerTranslator[activeStrings[1].finger],
	' finger on the ',
	mods[activeStrings[1].fret],
	' fret of the ',
	activeStrings[1].id,
	' string',
];
var baseResponse3 = [
	'To play the ',
	chordRequest,
	' chord, place your ',
	fingerTranslator[activeStrings[0].finger],
	' finger on the ',
	mods[activeStrings[0].fret],
	' fret of the ',
	activeStrings[0].id,
	'string, put your ',
	fingerTranslator[activeStrings[1].finger],
	' finger on the ',
	mods[activeStrings[1].fret],
	' fret of the ',
	activeStrings[1].id,
	' string, and put your ',
	fingerTranslator[activeStrings[2].finger],
	' finger on the ',
	mods[activeStrings[2].fret],
	' fret of the ',
	activeStrings[1].id,
	' string',
];
var baseResponse4 = [
	'To play the ',
	chordRequest,
	' chord, place your ',
	fingerTranslator[activeStrings[0].finger],
	' finger on the ',
	mods[activeStrings[0].fret],
	' fret of the ',
	activeStrings[0].id,
	' string, put your ',
	fingerTranslator[activeStrings[1].finger],
	' finger on the ',
	mods[activeStrings[1].fret],
	' fret of the ',
	activeStrings[1].id,
	' string, put your ',
	fingerTranslator[activeStrings[2].finger],
	' finger on the ',
	mods[activeStrings[2].fret],
	' fret of the ',
	activeStrings[2].id,
	' string, and put your ',
	fingerTranslator[activeStrings[3].finger],
	' finger on the ',
	mods[activeStrings[3].fret],
	' fret of the ',
	activeStrings[3].id,
	' string',
];

var baseResponses = [baseResponse1, baseResponse2, baseResponse3, baseResponse4];

 return baseResponses[fingersUsed-1].join('');
}
