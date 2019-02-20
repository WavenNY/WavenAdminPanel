const functions = require("firebase-functions");
const admin = require("firebase-admin");
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
    .document('strains2/{UID}').onWrite((change, context) => {
        const index = client.initIndex(ALGOLIA_INDEX);
        const changeSnapshot = change.after.val();
        if (!change.after.val()) {
            return;
        }
        var firebaseObject = changeSnapshot;
        firebaseObject.objectID = context.params.UID;
        return index.saveObject(firebaseObject);
    });



// Listen for any update change on documents in collection `strains2`
exports.strainUpdate = functions.firestore
    .document('strains2/{UID}').onUpdate((change, context) => {
        const index = client.initIndex(ALGOLIA_INDEX);
        const changeSnapshot = change.after.data();
        if (!change.after.data()) {
            return;
        }
        var firebaseObject = changeSnapshot;
        firebaseObject.objectID = context.params.UID;
        return index.saveObject(firebaseObject);
    });

// Listen for any new addition on documents in collection `strains2`
exports.strainCreate = functions.firestore
    .document('strains2/{UID}').onCreate((snap, context) => {
        const index = client.initIndex(ALGOLIA_INDEX);
        const changeSnapshot = snap.data();
        if (!changeSnapshot) {
            return;
        }
        var firebaseObject = changeSnapshot;
        firebaseObject.objectID = context.params.UID;
        return index.saveObject(firebaseObject);
    });

// Listen for any deletion on documents in collection `strains2`
exports.strainDelete = functions.firestore
    .document('strains2/{UID}').onDelete((snap, context) => {
        const index = client.initIndex(ALGOLIA_INDEX);
        const objectID = context.params.id
        return index.deleteObject(objectID);
    });

 