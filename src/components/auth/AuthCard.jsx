import AuthTabs from "./AuthTabs"
import { useState } from "react"
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

function AuthCard() {

  const [mode, setMode] = useState("login");

  return (
    <div className="auth-bg not-lg:rounded-xl not-lg:m-1 lg:w-[34%] p-6 lg:p-12">
      <div className="flex flex-col justify-between">
        <AuthTabs 
          mode = {mode}
          setMode = {setMode}
        />

        {mode === "login" ? 
          <LoginForm /> : <RegistrationForm />
        }
      </div>
    </div>
  )
}

export default AuthCard