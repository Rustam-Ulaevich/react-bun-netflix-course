import { useContext } from 'react'
 
export const useTheme = () => {
    return useContext(ThemeContext)
}