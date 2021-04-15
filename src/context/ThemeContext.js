import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('#ffffff')
    return (
        <ThemeContext.Provider value={{ theme, setTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => useContext(ThemeContext);