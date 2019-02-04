import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
//import * as algoliasearch from 'algoliasearch'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


let fConfig = {
    apiKey: "AIzaSyCGMgtw0_Itu9g0t8fz3fuG-8bjFG0JtQA",
    authDomain: "waven-backend.firebaseapp.com",
    databaseURL: "https://waven-backend.firebaseio.com",
    projectId: "waven-backend",
    storageBucket: "waven-backend.appspot.com",
    messagingSenderId: "928982945551"
}
admin.initializeApp(fConfig);
const algoliasearch = require("algoliasearch");
const client = algoliasearch(
    functions.config().algolia.app_id,
    functions.config().algolia.api_key
);
const ALGOLIA_INDEX = "search_strain_products";


// Listen for any write change on documents in collection `strains2`
exports.strainWrite = functions.firestore
    .document('strains2/{UID}').onWrite((change: any, context: any) => {
        const index = client.initIndex(ALGOLIA_INDEX);
        const changeSnapshot = change.after.data();
        if (!change.after.exists) {
            return;
        }
        var firebaseObject = changeSnapshot;
        firebaseObject.objectID = context.params.UID;
        console.log("Strain Write - Adding record to Algolia");
        return index.saveObject(firebaseObject);
    });



// Listen for any update change on documents in collection `strains2`
exports.strainUpdate = functions.firestore
    .document('strains2/{UID}').onUpdate((change: any, context: any) => {
        const index = client.initIndex(ALGOLIA_INDEX);
        const changeSnapshot = change.after.data();
        if (!change.after.data()) {
            return;
        }
        var firebaseObject = changeSnapshot;
        firebaseObject.objectID = context.params.UID;
        console.log("Strain Update - Adding record to Algolia");

        return index.saveObject(firebaseObject);
    });

// Listen for any new addition on documents in collection `strains2`
exports.strainCreate = functions.firestore
    .document('strains2/{UID}').onCreate((snap: any, context: any) => {
        const index = client.initIndex(ALGOLIA_INDEX);
        const changeSnapshot = snap.data();
        if (!changeSnapshot) {
            return;
        }
        var firebaseObject = changeSnapshot;
        firebaseObject.objectID = context.params.UID;
        console.log("Strain Create - Adding record to Algolia");

        return index.saveObject(firebaseObject);
    });

// Listen for any deletion on documents in collection `strains2`
exports.strainDelete = functions.firestore
    .document('strains2/{UID}').onDelete((snap: any, context: any) => {
        const index = client.initIndex(ALGOLIA_INDEX);
        const objectID = context.params.id
        console.log("Strain Delete - Deleting record to Algolia");

        return index.deleteObject(objectID);
    });

 
