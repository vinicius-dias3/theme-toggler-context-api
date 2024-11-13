import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"

export const ThemeTogglerButton = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)
    
    console.log('ThemeTogglerButton:', themes)
    
    return (
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)} >Clique aqui</Button>
        </div>
    )
}