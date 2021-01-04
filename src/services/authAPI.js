import { auth, db } from "./firestore";

import createKeywords from "../utils/createKeywords";

const generateKeywords = (firstName, lastName, email) => {
  const keywordFullName = createKeywords(`${firstName} ${lastName}`);
  const keywordLastNameFirst = createKeywords(`${lastName} ${firstName}`);
  const keywordEmail = createKeywords(email);

  return [...new Set(["", ...keywordFullName, ...keywordLastNameFirst, ...keywordEmail])];
};

export const signUpAPI = async payload => {
  const registeredUser = await auth.createUserWithEmailAndPassword(payload.email, payload.password);

  await db
    .collection("users")
    .doc()
    .set({
      uid: registeredUser.user.uid,
      firstName: payload.firstName,
      lastName: payload.lastName,
      requestOnDelete: false,
      role: "guest",
      email: payload.email,
      keywords: generateKeywords(payload.firstName, payload.lastName, payload.email),
    });
};

export const signInAPI = async payload => {
  await auth.signInWithEmailAndPassword(payload.email, payload.password);
};

export const signOutAPI = async () => {
  await auth.signOut();
};

export const onAuthStateChanged = () => {
  return new Promise(resolve => {
    auth.onAuthStateChanged(user => {
      if (user) {
        resolve(user);
      } else {
        resolve(null);
      }
    });
  });
};

export const getAuthChannelAPI = async () => {
  const user = await onAuthStateChanged();
  if (!user) {
    return {
      user: {
        uid: "",
        email: "",
        firstName: "",
        lastName: "",
        requestOnDelete: "",
        role: "",
      },
      loggedIn: false,
    };
  }

  const userCollectionDoc = await db.collection("users").where("uid", "==", user.uid).get();
  const customUser = userCollectionDoc.docs[0].data();
  return {
    user: {
      uid: user.uid,
      email: user.email,
      firstName: customUser.firstName,
      lastName: customUser.lastName,
      requestOnDelete: customUser.requestOnDelete,
      role: customUser.role,
    },
    loggedIn: true,
  };
};

export const requestOnDeleteAPI = async ({ uid }) => {
  const usersCollection = await db.collection("users").where("uid", "==", uid).get();
  await usersCollection.docs[0].ref.update({
    requestOnDelete: true,
  });
};

export const cancelRequestOnDeleteAPI = async ({ uid }) => {
  const usersCollection = await db.collection("users").where("uid", "==", uid).get();
  await usersCollection.docs[0].ref.update({
    requestOnDelete: false,
  });
};

export const updateProfileAPI = async payload => {
  const curUser = auth.currentUser;

  const usersCollection = await db.collection("users").where("uid", "==", curUser.uid).get();

  usersCollection.docs[0].ref.update({
    keywords: generateKeywords(
      payload.firstName || usersCollection.docs[0].data().firstName,
      payload.lastName || usersCollection.docs[0].data().lastName,
      payload.email || usersCollection.docs[0].data().email
    ),
  });

  await usersCollection.docs[0].ref.update(payload);
};

export const changeEmailAPI = async payload => {
  const userCredential = await auth.signInWithEmailAndPassword(
    auth.currentUser.email,
    payload.password
  );

  await userCredential.user.updateEmail(payload.email);

  const usersCollection = await db
    .collection("users")
    .where("uid", "==", auth.currentUser.uid)
    .get();
  await usersCollection.docs[0].ref.update({
    email: payload.email,
  });
};

export const changePasswordAPI = async payload => {
  const userCredential = await auth.signInWithEmailAndPassword(
    auth.currentUser.email,
    payload.password
  );

  await userCredential.user.updatePassword(payload.newPassword);
};
