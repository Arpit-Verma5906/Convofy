import { useState, useEffect } from "react";

import React from 'react'

function ThemeToggle() {

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
    }, [theme])

    return (
        <div className="px-5 py-2.5 bg-[#ffffff] dark:bg-[#25252b] rounded-4xl border dark:border-[#3b3b40] cursor-pointer border-[#E5E7EB] text-center"
        onClick={() => {setTheme(!theme)}}>
            <div className="text-[14px] leading-5 text-[#364153] dark:text-[#D1D5DC]">
                {!theme ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </div>
        </div>
    )
}

export default ThemeToggle