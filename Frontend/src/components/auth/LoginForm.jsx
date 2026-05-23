import Input from "../ui/Input";
import Button from "../ui/Button";
import EmailIcon from "../../assets/email.svg?react"
import LockIcon from "../../assets/lock.svg?react"
import { useOutletContext } from "react-router-dom";

function LoginForm() {

    const {
        signinEmail,
        setSigninEmail,
        signinPassword,
        setSigninPassword,
    } = useOutletContext()

    function handleSubmit(e) {
        e.preventDefault();

        console.log({ signinEmail, signinPassword })

        setSigninEmail("")
        setSigninPassword("")
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

            <div className="text-[14px] font-medium leading-5 text-[#A684FF] self-end">
                Forgot password?
            </div>

            <Button
                label="Sign  in ->"
            />
        </form>
    )
}

export default LoginForm