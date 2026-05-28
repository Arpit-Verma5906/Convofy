import Button from "../ui/Button"
import Input from "../ui/Input"
import api from "../../api/axios"
import EmailIcon from "../../assets/email.svg?react"
import LockIcon from "../../assets/lock.svg?react"
import HumanIcon from "../../assets/human.svg?react"
import AtSignIcon from "../../assets/atSign.svg?react"
import { useNavigate, useOutletContext } from "react-router-dom"

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

  const navigate = useNavigate()
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/auth/register", {
        displayName: signupDisplayName,
        username: signupUsername,
        email: signupEmail,
        password: signupPassword,
      })

      console.log(response.data)
      localStorage.setItem("token", response.data.token)

      navigate("/chat")
    }
    catch (error) {
      console.log(error)
    }
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
        autoComplete="name"
        name="displayName"
      />
      <Input
        label="Username"
        Icon={AtSignIcon}
        type="text"
        placeholder="arpitverma"
        value={signupUsername}
        onChange={(e) => setSignupUsername(e.target.value)}
        required="required"
        autoComplete="username"
        name="username"
      />
      <Input
        label="Email"
        Icon={EmailIcon}
        type="email"
        placeholder="you@example.com"
        value={signupEmail}
        onChange={(e) => setSignupEmail(e.target.value)}
        required="required"
        autoComplete="email"
        name="email"
      />
      <Input
        label="Password"
        Icon={LockIcon}
        type="password"
        placeholder="••••••••"
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
        required="required"
        autoComplete="new-password"
        name="new-password"
      />

      <Button
        label="Create Account"
      />
    </form>
  )
}

export default RegistrationForm