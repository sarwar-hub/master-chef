/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../utilities/firebase.config';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

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

    // create user
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
    // login
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth,  email, password);
    }


    // logout
    const logOut = () => {
        return signOut(auth);
    }
    

    const data = {user,createUser,updateNamePhoto,logIn,logOut,loadding};
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;