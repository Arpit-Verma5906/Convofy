import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "dark";
        return false;
    })

    useEffect(() => {
        const root = document.documentElement;

        if (theme) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{ theme, setTheme }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}