'use strict';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const ParseChordResponse = require('./parseChordResponse.js');

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        this.ask("Welcome to Ukulele Fingers! What chord would you like to learn?");
    },

    getFingers() {
        this.$session.$data.chordRequest = this.$inputs.CHORD.value;
        var chord2learn = this.$session.$data.chordRequest;

        var algResponse = ParseChordResponse.parseChordResponse(chord2learn);
        this.tell(algResponse);
    }

});

module.exports.app = app;
