import {
   createUserWithEmailAndPassword,
   getAuth,
   signInWithEmailAndPassword,
   signOut,
   UserCredential,
   onAuthStateChanged,
   signInWithPopup,
   User,
   GoogleAuthProvider,
} from "firebase/auth";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import app from "../../firebase";

type FirebaseContextType = {
   signupWithEmailPass: (email: string, password: string) => Promise<UserCredential>;
   loginWithEmailPass: (email: string, password: string) => Promise<UserCredential>;
   logout: () => void;
   user: User | null;
   loginWithGoogle: () => void;
};

const FirebaseContext = createContext<FirebaseContextType | null>(null);

export const useFirebase = () => {
   const context = useContext(FirebaseContext);
   if (!context) throw new Error("useFirebase must be used within a FirebaseProvider");
   return context;
};

export const FirebaseProvider = (props: { children: ReactNode }) => {
   const auth = getAuth(app);

   const [user, setUser] = useState<User | null>(null);

   const signupWithEmailPass = (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginWithEmailPass = (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   const loginWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
   };

   const logout = () => signOut(auth);

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         setUser(user);
      });
   }, []);

   useEffect(() => {
      console.log(user);
   }, [user]);

   return (
      <FirebaseContext.Provider
         value={{
            signupWithEmailPass,
            loginWithEmailPass,
            logout,
            user,
            loginWithGoogle,
         }}
      >
         {props.children}
      </FirebaseContext.Provider>
   );
};
