import { Outlet, useLocation } from "react-router-dom";
import AuthTabs from "./AuthTabs"
import SocialAuthButton from "./SocialAuthButton";
import PasskeyIcon from "../../assets/passkey.svg?react"
import GoogleIcon from "../../assets/google.svg?react"
import TermsText from "./TermsText";
import { useState } from "react";

function AuthCard() {

  const [signinEmail, setSigninEmail] = useState("")
  const [signinPassword, setSigninPassword] = useState("")

  const [signupDisplayName, setSignupDisplayName] = useState("")
  const [signupUsername, setSignupUsername] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")

  const location = useLocation();
  const isLogin = location.pathname === "/auth/signin";

  return (
    <div className="app-bg lg:w-[34%]">
      <div className="auth-bg not-lg:rounded-xl not-lg:m-1.5 p-6 lg:px-12">
        <div className="flex flex-col justify-between gap-8">

          <AuthTabs />

          <div
            key={location.pathname}
            className={`flex flex-col justify-between gap-8 ${isLogin ? "animate-fade-left" : "animate-fade-right"}`}
          >

            <Outlet
              context={{
                signinEmail,
                setSigninEmail,
                signinPassword,
                setSigninPassword,

                signupDisplayName,
                setSignupDisplayName,
                signupUsername,
                setSignupUsername,
                signupEmail,
                setSignupEmail,
                signupPassword,
                setSignupPassword,
              }}
            />

            <div className="flex items-center select-none gap-2">
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
    </div>
  )
}

export default AuthCard