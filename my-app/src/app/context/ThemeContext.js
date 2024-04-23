"use client";
import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

    const [ theme, setTheme ] = useState("lightMode");

    useEffect(() => {
    }, [theme])

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );

};

export default ThemeContext;