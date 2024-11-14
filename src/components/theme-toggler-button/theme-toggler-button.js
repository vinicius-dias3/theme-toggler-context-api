import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"

export const ThemeTogglerButton = () => {
    
    const { toggleTheme } = useContext(ThemeContext)
    
    console.log('ThemeTogglerButton:', themes)

    return (
        <div>
            <Button onClick={toggleTheme} >Clique aqui</Button>
        </div>
    )
}