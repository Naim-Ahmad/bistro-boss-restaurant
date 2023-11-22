import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import axios from "../config/axios.config";
import auth from "../config/firebase.config";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserInfo = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        axios.post("/crateToken", { email: currentUser.email }).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data?.token);
          }
        });
      } else {
        // do something
        localStorage.clear('token')
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authIfo = {
    user,
    loading,
    loginWithGoogle,
    registerUser,
    updateUserInfo,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={authIfo}>{children}</AuthContext.Provider>
  );
}
