/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../utilities/firebase.config';

// created context
export const AuthContext = createContext(null);
// google provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => { // component----------------------------

    const [user, setUser] = useState({});
    const [loadding, setLoadding] = useState(true);



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoadding(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // update profile
    const updateNamePhoto = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }
    // login with email and password
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth,  email, password);
    }
    // login with google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    // login with google
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    }


    // logout
    const logOut = () => {
        return signOut(auth);
    }
    

    const data = {user,createUser,updateNamePhoto,logIn,googleLogin,githubLogin,logOut,loadding};
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;