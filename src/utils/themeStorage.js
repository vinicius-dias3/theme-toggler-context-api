export const saveThemeLocalStorage = (currentTheme) => {
    localStorage.setItem('themeObject', JSON.stringify(currentTheme))
}

export const loadThemeLocalStorage = () => {
    const storedTheme = JSON.parse(localStorage.getItem)('themeObject') || []
    return storedTheme
}