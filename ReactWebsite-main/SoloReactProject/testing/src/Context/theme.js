// Creating theme context to implement light and dark mode.

import React, {Children, createContext, useContext, useState} from "react";

// Create a context as a variable ThemeContext

const ThemeContext = createContext()  

const ThemeProvider = ({children}) => {  

    //create state for theme
    const [DarkMode, setDarkMode] = useState(false)

    
    // create toggle
    const toggleMode = () => {
        console.log("hi")
        console.log(DarkMode)
        setDarkMode(!DarkMode)
    }

    // const [theme, setTheme] = useState("light")     

    // const toggleMode = () => {
    //     switch(theme){
    //     case "light":
    //         setTheme("dark")
    //     case "dark":
    //         setTheme("light")
    // }
    // }

    // const contextValue, provide current state and toggle it.
    const contextValue = {
        DarkMode,
        toggleMode
    }
    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context){
        throw new Error("useTheme must be used within a ThemeProivder.")
    }
    return context;
}

export {ThemeProvider, useTheme};