// ------------------------------------------------------------------
// APP CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    logging: true,
 
    intentMap: {
       'AMAZON.StopIntent': 'END',
    },
 
    db: {
         Firestore: {
             credential: require('./ukulele-fingers-firebase-adminsdk-n4pi7-b01956aca4.json'),
             databaseURL: 'https://ukulele-fingers.firebaseio.com',
             collectionName: 'users'
         }
     },
 };
 