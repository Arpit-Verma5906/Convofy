import { useTheme } from "../components/context/ThemeContext"

function ThemeToggle() {

    const { theme, setTheme } = useTheme()

    return (
        <div className="px-5 py-2.5 select-none bg-[#ffffff] dark:bg-[#25252b] rounded-4xl border dark:border-[#3b3b40] cursor-pointer border-[#E5E7EB] text-center"
        onClick={() => {setTheme(!theme)}}>
            <div className="text-[14px] leading-5 text-[#364153] dark:text-[#D1D5DC]">
                {!theme ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </div>
        </div>
    )
}

export default ThemeToggle