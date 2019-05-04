'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { Firestore } = require('jovo-db-firestore');
const ParseChordResponse = require('./parseChordResponse.js');
const ResponseParser = require('./response-parser.js');
var admin = require('firebase-admin');

var serviceAccount = require('./ukulele-fingers-firebase-adminsdk-n4pi7-b01956aca4.json')

const app = new App();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

var db = admin.firestore();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new Firestore()
);

var chor


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        this.tell('launching');
        var chords = db.collection('chords');
        var getDoc = chords.doc('Am').get()
            .then(doc => {
                console.log('Document data: ', doc.data());
            })
            .catch(err => {
                console.log(err);
            })
    },

    getFingers() {
        this.$session.$data.chordRequest = this.$inputs.CHORD.value;
        var chord2learn = this.$session.$data.chordRequest;

        
        ResponseParser.cleanSpokenChord(chord2learn);

        this.tell('response recieved');
        // var algResponse = ParseChordResponse.parseChordResponse(chord2learn);
        // var parseForFirestore = ParseChordResponse.parseForFirestore(chord2learn);

        // var chord = db.collection('chords').doc(parseForFirestore);
        // var getDoc = chord.get().then(doc => {
        //     console.log('Chord: ' + doc.data());
        // }).catch(err => {
        //     console.log(err);
        // });
    }

});

module.exports.app = app;
