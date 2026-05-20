import AuthTabs from "./AuthTabs"
import { useState } from "react"
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import SocialAuthButton from "./SocialAuthButton";
import PasskeyIcon from "../../assets/passkey.svg?react"
import GoogleIcon from "../../assets/google.svg?react"
import TermsText from "./TermsText";

function AuthCard() {

  const [mode, setMode] = useState("login");

  return (
    <div className="auth-bg not-lg:rounded-xl not-lg:m-1 lg:w-[34%] p-6 lg:px-12">
      <div className="flex flex-col justify-between gap-8">
        <AuthTabs
          mode={mode}
          setMode={setMode}
        />
        <div
          key={mode}
          className={`flex flex-col justify-between gap-8 ${mode === "login" ? "animate-fade-left" : "animate-fade-right"}`}
        >
          {mode === "login" ?
            <LoginForm /> : <RegistrationForm />
          }

          <div className="flex items-center gap-2">
            <div className="flex-1 h-[0.25px] bg-[#E5E7EB] dark:bg-white/10 line"></div>
            <span className="line-text leading-4 text-[12px] input-value">or continue with</span>
            <div className="flex-1 line bg-[#E5E7EB] dark:bg-white/10 h-[0.25px]"></div>
          </div>

          <div className="flex flex-row gap-3">
            <SocialAuthButton
              Icon={GoogleIcon}
              label="Google"
            />
            <SocialAuthButton
              Icon={PasskeyIcon}
              label="Passkey"
            />
          </div>

          <TermsText />
        </div>
      </div>
    </div>
  )
}

export default AuthCard