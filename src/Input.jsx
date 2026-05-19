function Input({ label, Icon, type = "text", placeholder, value, onChange, required}) {
  return (
    <div className="flex flex-col w-full px-1 gap-2">
        <label className="input-label text-[14px] font-medium leading-5">
            {label}
        </label>

        <div className="flex gap-2 w-full h-12.5 px-4 items-center text-center not-focus-within:input-value input-bg input-border rounded-xl">
            <Icon className="w-4 input-value"/>
            <input type={type}
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            required={required}
            className="pb-px outline-none"
            />
        </div>
        
    </div>
  )
}

export default Input