import { auth } from "./firestore";

export const signUpAPI = async (payload) => {
  return await auth.createUserWithEmailAndPassword(
    payload.email,
    payload.password
  );
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

export const authCurrentUserAPI = () => {
  return auth.currentUser;
};
