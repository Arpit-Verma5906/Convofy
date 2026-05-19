import Button from "../../Button"
import Input from "../../Input"
import { useState } from 'react'
import EmailIcon from "../../assets/email.svg?react"
import LockIcon from "../../assets/lock.svg?react"
import HumanIcon from "../../assets/human.svg?react"
import AtSignIcon from "../../assets/atSign.svg?react"

function RegistrationForm() {

  const [displayName, setDisplayName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault();

    console.log({ displayName, username, email, password })

    setDisplayName("")
    setUsername("")
    setEmail("")
    setPassword("")
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
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        required="required"
      />
      <Input
        label="Username"
        Icon={AtSignIcon}
        type="text"
        placeholder="arpitverma"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required="required"
      />
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

      <Button
        label="Create Account"
      />
    </form>
  )
}

export default RegistrationForm