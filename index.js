'use strict';

const Alexa = require('alexa-sdk');
const ParseChordResponse = require('parseChordResponse');
const UkeleleChordsList = require('ukeleleChordsList');

// Exhaustive list of chords
const ukuleleChordsList = UkeleleChordsList.UkeleleChordsList;

const handlers = {
  // Intent that's requested when no intent intially spoken
  'LaunchRequest': function () {
    // Session attribute for requested chord to learn
    this.attributes['chordRequest'] = "";
    // Alexa's speech output for welcoming user
    this.response.speak("Welcome to Ukulele Fingers! What chord would you like to learn?").listen("What chord would you like to learn?");
    this.emit(':responseReady');
  },
  'getFingers': function () {
    // Setting up 'chord2learn' variable based on 'chordRequest' attribute
    this.attributes['chordRequest'] = this.event.request.intent.slots.CHORD.value;
    var chord2learn = this.attributes['chordRequest'];

    var algResponse = ParseChordResponse.parseChordResponse(chord2learn);
    this.response.speak(algResponse);
    this.emit(':responseReady');
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = this.t('HELP_MESSAGE');
    const reprompt = this.t('HELP_MESSAGE');
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
};

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
