import { auth, db } from "./firestore";
import { eventChannel } from "redux-saga";

export const signUpAPI = async (payload) => {
  const registeredUser = await auth.createUserWithEmailAndPassword(
    payload.email,
    payload.password
  );

  await db.collection("users").doc().set({
    uid: registeredUser.user.uid,
    firstName: payload.firstName,
    lastName: payload.lastName,
    requestOnDelete: false,
    role: "guest",
    email: payload.email,
  });
};

export const signInAPI = async (payload) => {
  await auth.signInWithEmailAndPassword(payload.email, payload.password);
};

export const signOutAPI = async () => {
  await auth.signOut();
};

export const getAuthChannelAPI = () => {
  return eventChannel((emit) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .where("uid", "==", user.uid)
          .get()
          .then((usersCollection) => {
            const customUser = usersCollection.docs[0].data();
            emit({
              user: {
                uid: user.uid,
                email: user.email,
                firstName: customUser.firstName,
                lastName: customUser.lastName,
                requestOnDelete: customUser.requestOnDelete,
                role: customUser.role,
              },
            });
          });
      }
      emit({ user: null });
    });
  });
};

export const requestOnDeleteAPI = async ({ uid }) => {
  const usersCollection = await db
    .collection("users")
    .where("uid", "==", uid)
    .get();
  await usersCollection.docs[0].ref.update({
    requestOnDelete: true,
  });
};

export const cancelRequestOnDeleteAPI = async ({ uid }) => {
  const usersCollection = await db
    .collection("users")
    .where("uid", "==", uid)
    .get();
  await usersCollection.docs[0].ref.update({
    requestOnDelete: false,
  });
};

export const updateProfileAPI = async (payload) => {
  const curUser = auth.currentUser;

  const usersCollection = await db
    .collection("users")
    .where("uid", "==", curUser.uid)
    .get();
  await usersCollection.docs[0].ref.update(payload);
};

export const changeEmailAPI = async (payload) => {
  const userCredential = await auth.signInWithEmailAndPassword(
    auth.currentUser.email,
    payload.password
  );

  await userCredential.user.updateEmail(payload.email);
};

export const changePasswordAPI = async (payload) => {
  const userCredential = await auth.signInWithEmailAndPassword(
    auth.currentUser.email,
    payload.password
  );

  await userCredential.user.updatePassword(payload.newPassword);
};

/*export const getAuthChannelAPI = () => {
  return eventChannel((emit) => {
    return auth.onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        db.collection("users")
          .where("uid", "==", user.uid)
          .get()
          .then((usersCollection) => {
            const customUser = usersCollection.docs[0].data();
            console.log(customUser);
            emit({
              user: {
                uid: user.uid,
                email: user.email,
                firstName: customUser.firstName,
                lastName: customUser.lastName,
                requestOnDelete: customUser.requestOnDelete,
                role: customUser.role,
              },
            });
          });
      }
    });
  });
};*/
