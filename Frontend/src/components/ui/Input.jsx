import { useState } from "react"
import EyeIcon from "../../assets/eyeIcon.svg?react"
import EyeOffIcon from "../../assets/eyeOffIcon.svg?react"

function Input({ label, Icon, type = "text", placeholder, value, onChange, required, autoComplete, name }) {

  const [showPassword, setShowPassword] = useState(false)
  const inputType = type === "password" ? showPassword ? "text" : "password" : type

  return (
    <div className="flex flex-col w-full px-1 gap-2">
      <label className="input-label text-[14px] font-medium leading-5">
        {label}
      </label>

      <div className="flex gap-2 w-full h-12.5 px-4 text-[14px] items-center text-center input-bg input-border rounded-xl">
        <Icon className="w-4 input-value" />
        <input type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          autoComplete={autoComplete}
          name={name}
          className="flex-1 min-w-0 pb-px outline-none bg-transparent dark:text-white"
        />
        {type === "password" && (
          showPassword ? <EyeOffIcon
            className="cursor-pointer w-4 input-value"
            onClick={() => { setShowPassword(!showPassword) }}
          /> : <EyeIcon
            className="cursor-pointer w-4 input-value"
            onClick={() => { setShowPassword(!showPassword) }}
          />
        )}
      </div>
    </div>
  )
}

export default Input