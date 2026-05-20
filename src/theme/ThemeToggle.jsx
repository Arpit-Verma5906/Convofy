import { useState, useEffect } from "react";

import React from 'react'

function ThemeToggle() {

    const [ theme, setTheme ] = useState(() => {
        const saved = localStorage.getItem("theme");
        if(saved) return saved === "dark";
        return false;
    })

    useEffect(() => {
        const root = document.documentElement;

        if(theme) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme])

    return (
        <button
        onClick={() => {setTheme(!theme)}}>Theme</button>
    )
}

export default ThemeToggle