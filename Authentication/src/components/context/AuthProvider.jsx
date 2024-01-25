import { useContext, useState } from "react";
import { createContext } from "react";
import { auth } from "../../firebaseAuth";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthContext = createContext({});
// ! Name export
export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  const auth = getAuth();
  //! Google auth provider
  const provider = new GoogleAuthProvider();

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const logout = () => {
    return signOut(auth);
  };

  const authData = {
    currentUser,
    setCurrentUser,
    signUp,
    loginWithEmailAndPassword,
    loginWithGoogle,
    logout,
  };
  return (
    <>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
