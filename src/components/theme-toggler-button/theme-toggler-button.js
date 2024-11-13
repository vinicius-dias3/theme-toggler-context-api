import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"
import { saveThemeLocalStorage } from "../../utils/themeStorage"

export const ThemeTogglerButton = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)
    
    console.log('ThemeTogglerButton:', themes)
    saveThemeLocalStorage(theme)
    return (
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} >Clique aqui</Button>
        </div>
    )
}