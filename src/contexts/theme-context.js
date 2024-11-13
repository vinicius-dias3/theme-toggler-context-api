import { createContext, useState } from "react"
import { saveThemeLocalStorage } from "../utils/themeStorage"

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

    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
          {props.children}  
        </ThemeContext.Provider>
    )
}