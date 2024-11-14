import { createContext, useState } from "react"
import { loadThemeLocalStorage, saveThemeLocalStorage } from "../utils/themeStorage"

export const themes = {
    light: {
        color: '#000000',
        background: '#eeeeee'
    },
    dark: {
        color: '#ffffff',
        background: '#242424'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState (() => loadThemeLocalStorage() || themes.light)

    const toggleTheme = () => {
        const newTheme = theme === themes.light ? themes.dark : themes.light
        setTheme(newTheme)
        saveThemeLocalStorage(newTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          {props.children}  
        </ThemeContext.Provider>
    )
}