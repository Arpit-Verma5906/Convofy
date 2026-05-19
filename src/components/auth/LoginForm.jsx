import { useState } from "react"
import Input from "../../Input";
import Button from "../../Button";
import EmailIcon from "../../assets/email.svg?react"
import LockIcon from "../../assets/lock.svg?react"

function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault();

        console.log({ email, password })

        setEmail("")
        setPassword("")
    }

    return (
        <div className="flex flex-col gap-6">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
            >
                <Input
                    label="Email"
                    Icon={EmailIcon}
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required="required"
                />
                <Input
                    label="Password"
                    Icon={LockIcon}
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required="required"
                />

                <div className="text-[14px] font-medium leading-5 text-[#A684FF] self-end">
                    Forgot password?
                </div>

                <Button
                    label="Sign  in ->"
                />
            </form>
        </div>
    )
}

export default LoginForm