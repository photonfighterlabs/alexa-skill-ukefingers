'use strict';

const Alexa = require('alexa-sdk');

// Exhaustive list of chords
const ukuleleChordsList = {
  "languageModel": {
    "types": [
      {
        "name": "ukuleleChords",
        "values": [
          {
            "id": null,
            "name": {
              "value": "A",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "Am",
              "synonyms": [
                "A minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Aaug",
              "synonyms": [
                "A augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Adim",
              "synonyms": [
                "A diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "A7",
              "synonyms": [
                "A seventh"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Am7",
              "synonyms": [
                "A minor seventh",
                "A minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Amaj7",
              "synonyms": [
                "A major seventh",
                "A major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "A6",
              "synonyms": [
                "A sixth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Am6",
              "synonyms": [
                "A minor sixth",
                "A minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Amaj6",
              "synonyms": [
                "A major sixth",
                "A major 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Aadd9",
              "synonyms": [
                "A add ninth",
                "A add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Am9",
              "synonyms": [
                "A minor ninth",
                "A minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "A9",
              "synonyms": [
                "A ninth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Asus2",
              "synonyms": [
                "A suspended second",
                "A suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Asus4",
              "synonyms": [
                "A suspended fourth",
                "A suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "A7sus4",
              "synonyms": [
                "A seventh suspended fourth",
                "A 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bb",
              "synonyms": [
                "B flat"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbm",
              "synonyms": [
                "B flat minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbaug",
              "synonyms": [
                "B flat augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbdim",
              "synonyms": [
                "B flat diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bb7",
              "synonyms": [
                "B flat seventh",
                "B flat 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbm7",
              "synonyms": [
                "B flat minor seventh",
                "B flat minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbmaj7",
              "synonyms": [
                "B flat major seventh",
                "B flat major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bb6",
              "synonyms": [
                "B flat sixth",
                "B flat 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbm6",
              "synonyms": [
                "B flat minor sixth",
                "B flat minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbadd9",
              "synonyms": [
                "B flat add ninth",
                "B flat add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbm9",
              "synonyms": [
                "B flat minor ninth",
                "B flat minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bb9",
              "synonyms": [
                "B flat ninth",
                "B flat 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbsus2",
              "synonyms": [
                "B flat suspended second",
                "B flat suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bbsus4",
              "synonyms": [
                "B flat suspended fourth",
                "B flat suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bb7sus4",
              "synonyms": [
                "B flat seventh suspended fourth",
                "B flat 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "B",
              "synonyms": [
                "B"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bm",
              "synonyms": [
                "B minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Baug",
              "synonyms": [
                "B augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bdim",
              "synonyms": [
                "B diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "B7",
              "synonyms": [
                "B seventh"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bm7",
              "synonyms": [
                "B minor seventh",
                "B minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bmaj7",
              "synonyms": [
                "B major seventh",
                "B major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "B6",
              "synonyms": [
                "B sixth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bm6",
              "synonyms": [
                "B minor sixth",
                "B minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Badd9",
              "synonyms": [
                "B add ninth",
                "B add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bm9",
              "synonyms": [
                "B minor ninth",
                "B minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bsus2",
              "synonyms": [
                "B suspended second",
                "B suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Bsus4",
              "synonyms": [
                "B suspended fourth",
                "B suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "B7sus4",
              "synonyms": [
                "B seventh suspended fourth",
                "B 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "C",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "Cm",
              "synonyms": [
                "C minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Caug",
              "synonyms": [
                "C augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Cdim",
              "synonyms": [
                "C diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "C7",
              "synonyms": [
                "C seventh"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Cm7",
              "synonyms": [
                "C minor seventh",
                "C minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Cmaj7",
              "synonyms": [
                "C major seventh",
                "C major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "C6",
              "synonyms": [
                "C sixth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Cm6",
              "synonyms": [
                "C minor sixth",
                "C minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Cadd9",
              "synonyms": [
                "C add ninth",
                "C add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Cm9",
              "synonyms": [
                "C minor ninth",
                "C minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "C9",
              "synonyms": [
                "C ninth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Csus2",
              "synonyms": [
                "C suspended second",
                "C suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Csus4",
              "synonyms": [
                "C suspended fourth",
                "C suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "C7sus4",
              "synonyms": [
                "C seventh suspended fourth",
                "C 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Db",
              "synonyms": [
                "D flat"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbm",
              "synonyms": [
                "D flat minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbaug",
              "synonyms": [
                "D flat augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbdim",
              "synonyms": [
                "D flat diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Db7",
              "synonyms": [
                "D flat seventh",
                "D flat 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbm7",
              "synonyms": [
                "D flat minor seventh",
                "D flat minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbmaj7",
              "synonyms": [
                "D flat major seventh",
                "D flat major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Db6",
              "synonyms": [
                "D flat sixth",
                "D flat 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbm6",
              "synonyms": [
                "D flat minor sixth",
                "D flat minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbadd9",
              "synonyms": [
                "D flat add ninth",
                "D flat add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbm9",
              "synonyms": [
                "D flat minor ninth",
                "D flat minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Db9",
              "synonyms": [
                "D flat ninth",
                "D flat 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbsus2",
              "synonyms": [
                "D flat suspended second",
                "D flat suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dbsus4",
              "synonyms": [
                "D flat suspended fourth",
                "D flat suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Db7sus4",
              "synonyms": [
                "D flat seventh suspended fourth",
                "D flat 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "D",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dm",
              "synonyms": [
                "D minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Daug",
              "synonyms": [
                "D augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "D7",
              "synonyms": [
                "D seventh"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dm7",
              "synonyms": [
                "D minor seventh",
                "D minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dmaj7",
              "synonyms": [
                "D major seventh",
                "D major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "D6",
              "synonyms": [
                "D sixth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dm6",
              "synonyms": [
                "D minor 6",
                "D minor sixth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dadd9",
              "synonyms": [
                "D add ninth",
                "D add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dm9",
              "synonyms": [
                "D minor ninth",
                "D minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "D9",
              "synonyms": [
                "D ninth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dsus2",
              "synonyms": [
                "D suspended second",
                "D suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Dsus4",
              "synonyms": [
                "D suspended fourth",
                "D suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "D7sus4",
              "synonyms": [
                "D seventh suspended fourth",
                "D 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Eb",
              "synonyms": [
                "E flat"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebm",
              "synonyms": [
                "E flat minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebaug",
              "synonyms": [
                "E flat augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebdim",
              "synonyms": [
                "E flat diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Eb7",
              "synonyms": [
                "E flat seventh",
                "E flat 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebm7",
              "synonyms": [
                "E flat minor seventh",
                "E flat minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebmaj7",
              "synonyms": [
                "E flat major seventh",
                "E flat major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Eb6",
              "synonyms": [
                "E flat sixth",
                "E flat 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebm6",
              "synonyms": [
                "E flat minor sixth",
                "E flat minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebadd9",
              "synonyms": [
                "E flat add ninth",
                "E flat add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebm9",
              "synonyms": [
                "E flat minor ninth",
                "E flat minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Eb9",
              "synonyms": [
                "E flat ninth",
                "E flat 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebsus2",
              "synonyms": [
                "E flat suspended second",
                "E flat suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ebsus4",
              "synonyms": [
                "E flat suspended fourth",
                "E flat suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Eb7sus4",
              "synonyms": [
                "E flat seventh suspended fourth",
                "E flat 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "E",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "Em",
              "synonyms": [
                "E minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Eaug",
              "synonyms": [
                "E augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Edim",
              "synonyms": [
                "E diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "E7",
              "synonyms": [
                "E seventh"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Em7",
              "synonyms": [
                "E minor seventh",
                "E minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Emaj7",
              "synonyms": [
                "E major seventh",
                "E major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "E6",
              "synonyms": [
                "E sixth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Em6",
              "synonyms": [
                "E minor sixth",
                "E minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Eadd9",
              "synonyms": [
                "E add ninth",
                "E add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Em9",
              "synonyms": [
                "E minor ninth",
                "E minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "E9",
              "synonyms": [
                "E ninth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Esus2",
              "synonyms": [
                "E suspended second",
                "E suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Esus4",
              "synonyms": [
                "E suspended fourth",
                "E suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "E7sus4",
              "synonyms": [
                "E seventh suspended fourth",
                "E 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "F",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "Fm",
              "synonyms": [
                "F minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Faug",
              "synonyms": [
                "F augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Fdim",
              "synonyms": [
                "F diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "F7",
              "synonyms": [
                "F seventh"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Fm7",
              "synonyms": [
                "F minor seventh",
                "F minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Fmaj7",
              "synonyms": [
                "F major seventh",
                "F major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "F6",
              "synonyms": [
                "F sixth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Fm6",
              "synonyms": [
                "F minor sixth",
                "F minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Fadd9",
              "synonyms": [
                "F add ninth",
                "F add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Fm9",
              "synonyms": [
                "F minor ninth",
                "F minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "F9",
              "synonyms": [
                "F ninth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Fsus2",
              "synonyms": [
                "F suspended second",
                "F suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Fsus4",
              "synonyms": [
                "F suspended fourth",
                "F suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "F7sus4",
              "synonyms": [
                "F seventh suspended fourth",
                "F 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gb",
              "synonyms": [
                "G flat"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbm",
              "synonyms": [
                "G flat minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbaug",
              "synonyms": [
                "G flat augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbdim",
              "synonyms": [
                "G flat diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gb7",
              "synonyms": [
                "G flat seventh",
                "G flat 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbm7",
              "synonyms": [
                "G flat minor seventh",
                "G flat minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbmaj7",
              "synonyms": [
                "G flat major seventh",
                "G flat major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gb6",
              "synonyms": [
                "G flat sixth",
                "G flat 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbm6",
              "synonyms": [
                "G flat minor sixth",
                "G flat minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbadd9",
              "synonyms": [
                "G flat add ninth",
                "G flat add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbm9",
              "synonyms": [
                "G flat minor ninth",
                "G flat minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gb9",
              "synonyms": [
                "G flat ninth",
                "G flat 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbsus2",
              "synonyms": [
                "G flat suspended second",
                "G flat suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gbsus4",
              "synonyms": [
                "G flat suspended fourth",
                "G flat suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gb7sus4",
              "synonyms": [
                "G flat seventh suspended fourth",
                "G flat 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "G",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gm",
              "synonyms": [
                "G minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gaug",
              "synonyms": [
                "G augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gdim",
              "synonyms": [
                "G diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "G7",
              "synonyms": [
                "G seventh"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gm7",
              "synonyms": [
                "G minor seventh",
                "G minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gmaj7",
              "synonyms": [
                "G major seventh",
                "G major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "G6",
              "synonyms": [
                "G sixth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gm6",
              "synonyms": [
                "G minor sixth",
                "G minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gadd9",
              "synonyms": [
                "G add ninth",
                "G add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gm9",
              "synonyms": [
                "G minor ninth",
                "G minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "G9",
              "synonyms": [
                "G ninth"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gsus2",
              "synonyms": [
                "G suspended second",
                "G suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Gsus4",
              "synonyms": [
                "G suspended fourth",
                "G suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "G7sus4",
              "synonyms": [
                "G seventh suspended fourth",
                "G 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ab",
              "synonyms": [
                "A flat"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Abm",
              "synonyms": [
                "A flat minor"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Abaug",
              "synonyms": [
                "A flat augmented"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Abdim",
              "synonyms": [
                "A flat diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ab7",
              "synonyms": [
                "A flat seventh",
                "A flat 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Abm7",
              "synonyms": [
                "A flat minor seventh",
                "A flat minor 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Abmaj7",
              "synonyms": [
                "A flat major seventh",
                "A flat major 7"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ab6",
              "synonyms": [
                "A flat sixth",
                "A flat 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Abm6",
              "synonyms": [
                "A flat minor sixth",
                "A flat minor 6"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Abadd9",
              "synonyms": [
                "A flat add ninth",
                "A flat add 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Abm9",
              "synonyms": [
                "A flat minor ninth",
                "A flat minor 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ab9",
              "synonyms": [
                "A flat ninth",
                "A flat suspended 9"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Absus2",
              "synonyms": [
                "A flat suspended second",
                "A flat suspended 2"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Absus4",
              "synonyms": [
                "A flat suspended fourth",
                "A flat suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ab7sus4",
              "synonyms": [
                "A flat seventh suspended fourth",
                "A flat 7 suspended 4"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "Ddim",
              "synonyms": [
                "D diminished"
              ]
            }
          },
          {
            "id": null,
            "name": {
              "value": "A sharp",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "C sharp",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "D sharp",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "F sharp",
              "synonyms": []
            }
          },
          {
            "id": null,
            "name": {
              "value": "G sharp",
              "synonyms": []
            }
          }
        ]
      }
    ]
  }
};

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


    var requestSplitArray = chord2learn.split(' ');
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
    	chord2lean,
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
    	chord2learn,
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
    	chord2learn,
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

    var algResponse = baseResponses[fingersUsed-1].join('');
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
