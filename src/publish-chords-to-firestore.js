const admin = require('firebase-admin');
const serviceAccount = require('./ukulele-fingers-firebase-adminsdk-n4pi7-b01956aca4.json');
const ChordFile = require('./chords.js');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

var db = admin.firestore();
var chords = ChordFile.getChords();

var chordKeys = chords.keys();
var chordValues = chords.values();

for (let i = 0; i < chordKeys.length; i++) {
    var docRef = db.collection('chords').doc(chordKeys[i]);
    docRef.set({
        startFret: chordValues[i][0],
        fingersUsed: chordValues[i][1],
        string1: chordValues[i][2],
        string2: chordValues[i][3],
        string3: chordValues[i][4],
        string4: chordValues[i][5]
    });

    await sleep(1000);
}