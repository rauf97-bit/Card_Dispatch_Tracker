import React, { useContext, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const AuthContext = createContext();

export const UseContext = () => useContext(AuthContext);

const INITIAL_STATE = {
  fisrtname: "",
  email: "",
};

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  const createUser = async (email, password, Fullname, tel) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredentials) => {
        try {
          const docRef = await addDoc(collection(db, "users"), {
            Fullname,
            tel,
            userId: `${userCredentials.user.uid}`,
          });
          console.log(docRef.id);
        } catch (error) {}
      }
    );
  };

  const signInUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    return;
  };
  const logout = () => {
    return signOut(auth);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
        console.log(user);
      }
    });
  });
  return (
    <AuthContext.Provider
      value={{
        createUser,
        currentUser,
        signInUser,
        logout,
        resetPassword,
        INITIAL_STATE,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
