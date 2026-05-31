function SocialAuthButton({ Icon, label }) {

  function handleClick() {
    if (label === "Google") {
      window.location.href =
        "http://localhost:5000/api/auth/google"
    }
  }

  return (
    <div className="flex select-none flex-row gap-2 justify-center items-center w-full py-2.5 cursor-pointer text-[#364153] dark:text-[#FFFFFF] bg-[#F9FAFB] hover:bg-[#f3f4f6] dark:bg-[#1f1f29] dark:hover:bg-[#2b2b35] rounded-2xl border border-[#E5E7EB] dark:border-[#35353f]"
      onClick={handleClick}
    >
      <Icon className="w-4 text-[#364153] dark:text-[#FFFFFF]" />
      <div>
        {label}
      </div>
    </div>
  )
}

export default SocialAuthButton