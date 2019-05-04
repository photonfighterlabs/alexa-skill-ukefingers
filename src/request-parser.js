"use strict";

exports.parseForFirestore = function (spokenChord) {
    cleanSpokenChord();
}

exports.cleanSpokenChord = function (spokenChord) {
    console.log(spokenChord);
    spokenChord = spokenChord.toLowerCase();

    var cleansingArray = spokenChord.split('');

    // removes any '.'s
    for (var i = 0; i < cleansingArray.length; i++) {
        if (cleansingArray[i] == '.') {
            cleansingArray.splice(i, 1);
        }
    }

    cleansingArray = cleansingArray.join('').split(' ');
    console.log('//// CLEANSING ARRAY: ' + cleansingArray.toString());
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

    console.log('FINAL CHORD NOTATION: ' + cleansingArray.toString());
    return cleansingArray.join();

}

exports.buildSpokenResponse = function (spokenChord, chordArray) {
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
        fret: chordArray[3][0] + (startFret - 1), //TODO don't know if I like this...
        finger: chordArray[2][1],
        id: 'first',
    }

    var string2 = {
        fret: chordArray[3][0] + (startFret - 1),
        finger: chordArray[3][1],
        id: 'second'
    }

    var string3 = {
        fret: chordArray[4][0] + (startFret - 1),
        finger: chordArray[4][1],
        id: 'third'
    }

    var string4 = {
        fret: chordArray[5][0] + (startFret - 1),
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
}