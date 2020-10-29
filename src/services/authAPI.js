import { auth } from "./firestore";

export const signUpAPI = async (payload) => {
  await auth.createUserWithEmailAndPassword(payload.email, payload.password);
};

export const signInAPI = async (payload) => {
  await auth.signInWithEmailAndPassword(payload.email, payload.password);
};

export const signOutAPI = async () => {
  await auth.signOut();
};

export const updatePassword = async (payload) => {
  await auth.currentUser.updatePassword(payload.newPassword);
};
