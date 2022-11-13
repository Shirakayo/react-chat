import { createContext } from 'react'

export const themes = {
  dark: {},
}

export const ThemeContext = createContext({
  theme: themes.dark,
  changeTheme: () => {},
})
