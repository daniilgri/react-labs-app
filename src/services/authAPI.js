import { auth, db } from "./firestore";
import { eventChannel, END } from "redux-saga";

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
  });

  return {};
};

export const signInAPI = async (payload) => {
  return await auth.signInWithEmailAndPassword(payload.email, payload.password);
};

export const signOutAPI = async () => {
  await auth.signOut();
};

export const updatePasswordAPI = async (payload) => {
  await auth.currentUser.updatePassword(payload.newPassword);
};

export const getAuthChannelAPI = () => {
  return eventChannel((emit) => {
    return auth.onAuthStateChanged((user) => {
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
    });
  });
};
