import { useAuth } from "../context/AuthContext"
import { getAvatarColours } from "../utils/avatarUtils"

function Avatar({ isOnline = false }) {

  const { user } = useAuth()

  if (!user) {
    return null
  }

  if (user.avatar)
    return (
      <div className="relative">
        <img alt="Avatar" src={user?.avatar} referrerPolicy="no-referrer" className="rounded-full h-10 w-10" />
        <div className={`absolute bottom-0.75 right-0.75 ring-2 w-1.25 h-1.25 rounded-full
          ${isOnline ? "bg-[#00d492] ring-[#009c6b]" : "bg-[#6a7282] ring-[#4f5662]"}
          `}
        />
      </div>
    )

  else return (
    <div className="relative">
      <div className="h-10 w-10 flex items-center justify-center rounded-full"
        style={{
          backgroundColor: getAvatarColours(user.username)
        }}
      >
        {user.displayName.charAt(0).toUpperCase()}
      </div>
      <div className={`absolute bottom-0.75 right-0.75 ring-2 w-1.25 h-1.25 rounded-full
        ${isOnline ? "bg-[#00d492] ring-[#009c6b]" : "bg-[#6a7282] ring-[#4f5662]"}
        `}
      />
    </div>
  )
}

export default Avatar