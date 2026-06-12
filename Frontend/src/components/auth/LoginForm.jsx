import Input from "../ui/Input";
import Button from "../ui/AuthButton";
import api from "../../api/axios";
import EmailIcon from "../../assets/email.svg?react"
import LockIcon from "../../assets/lock.svg?react"
import { useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext"

function LoginForm() {

    const {
        signinEmail,
        setSigninEmail,
        signinPassword,
        setSigninPassword,
    } = useOutletContext()

    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate();
    const { setUser } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setErrorMessage("");
            const response = await api.post("/auth/login", {
                email: signinEmail,
                password: signinPassword,
            })
            localStorage.setItem("token", response.data.token)
            setUser(response.data.user)

            navigate("/chat")
        }
        catch (error) {
            setErrorMessage(error.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
        >
            <Input
                label="Email"
                Icon={EmailIcon}
                type="email"
                placeholder="you@example.com"
                value={signinEmail}
                onChange={(e) => setSigninEmail(e.target.value)}
                required="required"
                autoComplete="email"
                name="email"
            />
            <Input
                label="Password"
                Icon={LockIcon}
                type="password"
                placeholder="••••••••"
                value={signinPassword}
                onChange={(e) => setSigninPassword(e.target.value)}
                required="required"
                autoComplete="current-password"
                name="password"
            />

            {errorMessage && (
                <div className="text-[12px] select-none font-normal leading-3.5 text-red-500 text-center">
                    {errorMessage}
                </div>
            )}

            <div className="text-[14px] select-none font-medium leading-5 text-[#A684FF] self-end">
                Forgot password?
            </div>

            <Button
                label="Sign  in ->"
            />
        </form>
    )
}

export default LoginForm