"use strict";

exports.buildSpokenResponse = async function (db, spokenChord) {
    console.log('spokenChord: ' + spokenChord);
    var firebaseQuery = cleanSpokenChord(spokenChord);
    console.log('Query: ' + firebaseQuery + ' is String? ' + (firebaseQuery instanceof String));
    var chordsRef = db.collection('chords').doc(firebaseQuery);

    let chord = await chordsRef.get().catch((err) => console.log(err));

    if (!chord.exists) {
        return 'Chord does not exist in database';
    } else {
        let chordObject = chord.data();
        let chordArray = [
            chordObject.startFret,
            chordObject.fingersUsed,
            chordObject.string1,
            chordObject.string2,
            chordObject.string3,
            chordObject.string4
        ]

        var startFret = chordArray[0];
        var fingersUsed = chordArray[1];

        var fingerModifiers = {
            1: 'index',
            2: 'middle',
            3: 'ring',
            4: 'pinky'
        }

        // STARTING FRET IS ZERO BY DEFAULT
        var string1 = {
            fret: chordArray[3][0],
            finger: chordArray[2][1],
            id: 'first',
        }

        var string2 = {
            fret: chordArray[3][0],
            finger: chordArray[3][1],
            id: 'second'
        }

        var string3 = {
            fret: chordArray[4][0],
            finger: chordArray[4][1],
            id: 'third'
        }

        var string4 = {
            fret: chordArray[5][0],
            finger: chordArray[5][1],
            id: 'fourth'
        }

        var activeStrings = [];

        for (var i = 2; i < chordArray.length; i++) {
            if (chordArray[i][0] !== 0) {
                if ((i - 1) == 1) {
                    activeStrings.push(string1);
                }
                if ((i - 1) == 2) {
                    activeStrings.push(string2);
                }
                if ((i - 1) == 3) {
                    activeStrings.push(string3);
                }
                if ((i - 1) == 4) {
                    activeStrings.push(string4);
                }
            }
        }

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

        var response = [];

        if (fingersUsed == 1) {
            response = [
                'To play the ',
                spokenChord,
                ' chord, place your index finger on the ',
                numConversions[activeStrings[0].fret],
                ' fret of the ',
                activeStrings[0].id,
                ' string'
            ];
        } else if (fingersUsed == 2) {
            response = [
                'To play the ',
                spokenChord,
                ' chord, place your ',
                fingerModifiers[activeStrings[0].finger],
                ' finger on the ',
                numConversions[activeStrings[0].fret],
                ' fret of the ',
                activeStrings[0].id,
                ' string, and put your ',
                fingerModifiers[activeStrings[1].finger],
                ' finger on the ',
                numConversions[activeStrings[1].fret],
                ' fret of the ',
                activeStrings[1].id,
                ' string'
            ];
        } else if (fingersUsed == 3) {
            response = [
                'To play the ',
                spokenChord,
                ' chord, place your ',
                fingerModifiers[activeStrings[0].finger],
                ' finger on the ',
                numConversions[activeStrings[0].fret],
                ' fret of the ',
                activeStrings[0].id,
                ' string, place your ',
                fingerModifiers[activeStrings[1].finger],
                ' finger on the ',
                numConversions[activeStrings[1].fret],
                ' fret of the ',
                activeStrings[1].id,
                ' string, and place your ',
                fingerModifiers[activeStrings[2].finger],
                ' finger on the ',
                numConversions[activeStrings[2].fret],
                ' fret of the ',
                activeStrings[1].id,
                ' string'
            ];
        } else if (fingersUsed == 4) {
            response = [
                'To play the ',
                spokenChord,
                ' chord, place your ',
                fingerModifiers[activeStrings[0].finger],
                ' finger on the ',
                numConversions[activeStrings[0].fret],
                ' fret of the ',
                activeStrings[0].id,
                ' string, put your ',
                fingerModifiers[activeStrings[1].finger],
                ' finger on the ',
                numConversions[activeStrings[1].fret],
                ' fret of the ',
                activeStrings[1].id,
                ' string, put your ',
                fingerModifiers[activeStrings[2].finger],
                ' finger on the ',
                numConversions[activeStrings[2].fret],
                ' fret of the ',
                activeStrings[2].id,
                ' string, and put your ',
                fingerModifiers[activeStrings[3].finger],
                ' finger on the ',
                numConversions[activeStrings[3].fret],
                ' fret of the ',
                activeStrings[3].id,
                ' string'
            ];
        }

        return response.join('');
    }


}

function cleanSpokenChord(spokenChord) {
    if (spokenChord.length == 2)
        return spokenChord;

    let parsedChord = spokenChord.toLowerCase();

    var cleansingArray = parsedChord.split('');

    // removes any '.'s
    for (var i = 0; i < cleansingArray.length; i++) {
        if (cleansingArray[i] == '.') {
            cleansingArray.splice(i, 1);
        }
    }

    cleansingArray = cleansingArray.join('').split(' ');
    // [b, flat, minor]
    var chordModifiers = {
        // base notes
        // have to allow for descrepencies in alexa
        'a': 'A',
        'b': 'B',
        'c': 'C',
        'd': 'D',
        'e': 'E',
        'f': 'F',
        'g': 'G',
        'A': 'A',
        'B': 'B',
        'C': 'C',
        'D': 'D',
        'E': 'E',
        'F': 'F',
        'G': 'G',

        // key modifiers
        'major': 'maj',
        'minor': 'm',

        // pitch modifiers
        'sharp': '#',
        'flat': 'b',

        // scale modifiers
        'augmented': 'aug',
        'diminished': 'dim',
        'suspended': 'sus',
        'add': 'add',

        // interval modifiers
        // have to allow for descrepencies in alexa
        '13': '13',
        '11': '11',
        '9': '9',
        '7': '7',
        '6': '6',
        '5': '5',
        '4': '4',
        '2': '2',
        '13th': '13',
        '11th': '11',
        '9th': '9',
        '7th': '7',
        '6th': '6',
        '5th': '5',
        '4th': '4',
        '2nd': '2',
        'thirteenth': '13',
        'eleventh': '11',
        'ninth': '9',
        'seventh': '7',
        'sixth': '6',
        'fifth': '5',
        'fourth': '4',
        'second': '2',
        'thirteen': '13',
        'eleven': '11',
        'nine': '9',
        'seven': '7',
        'six': '6',
        'five': '5',
        'four': '4',
        'two': '2',
    }

    cleansingArray[0] = cleansingArray[0].toUpperCase();

    for (var i = 0; i < cleansingArray.length; i++) {
        cleansingArray[i] = chordModifiers[cleansingArray[i]];
    }

    console.log('cleansingArray: ' + cleansingArray.join().toString());
    
    return cleansingArray.join('').toString();

}

