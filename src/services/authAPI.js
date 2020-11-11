import { auth, db } from "./firestore";
import { authCurrentUserSucceed } from "../store/actions/authActions";

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

export const authCurrentUserAPI = (dispatch) => {
  auth.onAuthStateChanged((user) => {
    dispatch(authCurrentUserSucceed(user));
  });
  return auth.currentUser;
};
