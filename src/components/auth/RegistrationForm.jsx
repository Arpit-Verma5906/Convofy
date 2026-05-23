import Button from "../ui/Button"
import Input from "../ui/Input"
import EmailIcon from "../../assets/email.svg?react"
import LockIcon from "../../assets/lock.svg?react"
import HumanIcon from "../../assets/human.svg?react"
import AtSignIcon from "../../assets/atSign.svg?react"
import { useOutletContext } from "react-router-dom"

function RegistrationForm() {

  const {
    signupDisplayName,
    setSignupDisplayName,
    signupUsername,
    setSignupUsername,
    signupEmail,
    setSignupEmail,
    signupPassword,
    setSignupPassword,
  } = useOutletContext()

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ signupDisplayName, signupUsername, signupEmail, signupPassword })

    setSignupDisplayName("")
    setSignupUsername("")
    setSignupEmail("")
    setSignupPassword("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
    >
      <Input
        label="Display Name"
        Icon={HumanIcon}
        type="text"
        placeholder="Arpit Verma"
        value={signupDisplayName}
        onChange={(e) => setSignupDisplayName(e.target.value)}
        required="required"
      />
      <Input
        label="Username"
        Icon={AtSignIcon}
        type="text"
        placeholder="arpitverma"
        value={signupUsername}
        onChange={(e) => setSignupUsername(e.target.value)}
        required="required"
      />
      <Input
        label="Email"
        Icon={EmailIcon}
        type="email"
        placeholder="you@example.com"
        value={signupEmail}
        onChange={(e) => setSignupEmail(e.target.value)}
        required="required"
      />
      <Input
        label="Password"
        Icon={LockIcon}
        type="password"
        placeholder="••••••••"
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
        required="required"
      />

      <Button
        label="Create Account"
      />
    </form>
  )
}

export default RegistrationForm