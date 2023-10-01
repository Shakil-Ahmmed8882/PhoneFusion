import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../🔥 Firebase/Firebase.config";

export const AuthContext = createContext()

// signin providers
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

//global context that's available throughout your entire app.
const AuthContextProvider = ({children}) => {

      // logged in user 
      const [user, setUser] = useState(null)
      

      //Create new user
      const createUser = (email,password) =>{
           return createUserWithEmailAndPassword(auth, email, password)
      }

      // Signin
      const signIn = (email,password) => {
            return signInWithEmailAndPassword(auth,email,password)
      }

      //Sign in with gogole
      const googleSignIn = () => {
           return signInWithPopup(auth,googleProvider)
      }

      // Sign in with github
      const githubSignIn = () =>{
            return signInWithPopup(auth, githubProvider)
      }
      // Logout
      const logOut = () => {
            return signOut(auth)
      }

      // Reset the password
      const resetPassword = (email) =>{
            return sendPasswordResetEmail(auth,email)
      }


      // Observing wheather a user singned in or not
      useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth,authUser=>{
                  if(authUser){
                        setUser(authUser)
                  }
            })

            return ()=> unSubscribe
      },[])
      








      //Defining user information 
      const userInfo = {
            createUser,
            signIn,
            user,
            logOut,
            googleSignIn,
            githubSignIn,
            resetPassword
      }

      return (
      <AuthContext.Provider value={userInfo}>
            {children}
      </AuthContext.Provider>
      );
};

AuthContextProvider.propTypes = {
      children:PropTypes.node.isRequired
}

export default AuthContextProvider;