import {
   createUserWithEmailAndPassword,
   getAuth,
   signInWithEmailAndPassword,
   UserCredential,
} from "firebase/auth";
import React, { createContext, useContext } from "react";
import app from "../../firebase";

interface Props {
   signupWithEmailPass: (email: string, password: string) => Promise<UserCredential>;
   loginWithEmailPass: (email: string, password: string) => Promise<UserCredential>;
}
const FirebaseContext = createContext<Props>({
   signupWithEmailPass: function (email: string, password: string): Promise<UserCredential> {
      throw new Error("Function not implemented.");
   },
   loginWithEmailPass: function (email: string, password: string): Promise<UserCredential> {
      throw new Error("Function not implemented.");
   },
});

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
   const auth = getAuth(app);

   const signupWithEmailPass = (email: string, password: string) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginWithEmailPass = (email: string, password: string) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   return (
      <FirebaseContext.Provider value={{ signupWithEmailPass, loginWithEmailPass }}>
         {props.children}
      </FirebaseContext.Provider>
   );
};
