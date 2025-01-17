import React, { createContext, ReactNode, useState, useContext } from "react"

interface ITheme {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>; // Tipo da função que muda o estado no hook useState
}

interface ThemeProps {
    children: ReactNode
}

export const ThemeContext = createContext<ITheme | undefined>(undefined); // considera que inicialmente o contexto pode ser nulo

export default function ThemeContextProvider({ children }: ThemeProps) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext(): ITheme {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("undefined context");
    }

    return context;
}