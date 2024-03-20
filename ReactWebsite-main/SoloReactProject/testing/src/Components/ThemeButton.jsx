import React from "react";

import { useTheme } from "../Context/theme";

const ThemeButton = () => {
    const {DarkMode, toggleMode} = useTheme()  // Name sensitive. Has to match contextValues

    return(
        <button className="ThemeButton" onClick={toggleMode}>
            <h1>{DarkMode ? `Dark` : `Light`}</h1>
        </button>
    )
}

export {ThemeButton}