/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const IsActive = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>
        isActive ? "bg-slate-100/10 text-white" : ""
        }
        >
            {children}
        </NavLink>
    );
};

export default IsActive;