/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const user = 'Sarwar';
    const info = {
        user
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;