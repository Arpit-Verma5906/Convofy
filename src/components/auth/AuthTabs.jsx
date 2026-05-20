function AuthTabs({ mode, setMode }) {
  return (
    <div className="relative flex w-full rounded-2xl p-1 bg-[#f3f4f6] dark:bg-[#2b2b34] ">

      <div className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-xl bg-[#7F22FE] transition-all duration-200"
        style={{ transform: mode === "login" ? "translateX(0%)" : "translateX(100%)" }} />

      <div className="flex py-2.5 z-10 w-full text-[#6a7282] dark:text-[#99a1af] cursor-pointer">
        <div className={`w-[50%] flex justify-center
          ${mode === "login" ? "text-white" : ""}
          `}
          onClick={() => setMode("login")}
        >
          Sign In
        </div>
        <div className={`w-[50%] flex justify-center
          ${mode === "register" ? "text-white" : ""}
        `}
          onClick={() => setMode("register")}
        >
          Create Account
        </div>
      </div>

    </div>
  )
}

export default AuthTabs