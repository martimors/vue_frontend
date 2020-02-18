const functions = require("firebase-functions");
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require("firebase-admin");
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.addDefaultUserRole = functions
  .region("europe-west1")
  .auth.user()
  .onCreate(async user => {
    /**
     * This sets the claim isAdmin to false for all new users.
     */
    let uid = user.uid;

    //add custom claims
    await admin.auth().setCustomUserClaims(uid, {
      isAdmin: false
    });
    const userRecord = await admin.auth().getUser(uid);
    console.log(uid);
    console.log(userRecord.customClaims.isAdmin);
    return null;
  });

//Function to retrieve a user by email
exports.getUser = functions.https.onCall(async (data, context) => {
  const currentUser = await admin.auth().getUser(data.uid);
  const userToChange = await admin.auth().getUserByEmail(data.email);
  if (currentUser.customClaims.isAdmin) {
    return {
      displayName: userToChange.displayName,
      email: userToChange.email,
      isAdmin: userToChange.customClaims.isAdmin
    };
  } else {
    throw new Error("Needs admin to change admin privileges!");
  }
});

exports.toggleAdmin = functions.https.onCall(async (data, context) => {
  const currentUser = await admin.auth().getUser(data.uid);
  const userToChange = await admin.auth().getUserByEmail(data.email);
  let userHasAdmin = await userToChange.customClaims.isAdmin;
  if (userToChange.email === functions.config().admin.email) {
    throw new Error("Cannot change admin status of superuser");
  } else if (currentUser.customClaims.isAdmin) {
    await admin.auth().setCustomUserClaims(userToChange.uid, {
      isAdmin: !userHasAdmin
    });
    return {
      displayName: userToChange.displayName,
      email: userToChange.email,
      isAdmin: !userHasAdmin
    };
  } else {
    throw new Error("Needs admin to change admin privileges!");
  }
});
