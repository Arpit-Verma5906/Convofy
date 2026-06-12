import { getAvatarColours } from "../utils/avatarUtils"

function Avatar({ isOnline = false, avatar, username, displayName }) {
    return (
        <div className="relative">
            {avatar
                ? <img alt="Avatar" src={avatar} referrerPolicy="no-referrer" className="rounded-full h-11 w-11 object-cover" />
                : <div className="h-11 w-11 flex items-center justify-center rounded-full"
                    style={{
                        backgroundColor: getAvatarColours(username)
                    }}
                >
                    {displayName?.[0]?.toUpperCase() || "?"}
                </div>
            }
            <div className={`absolute bottom-0.75 right-0.75 ring-2 w-1.25 h-1.25 rounded-full
            ${isOnline ? "bg-[#00d492] ring-[#009c6b]" : "bg-[#6a7282] ring-[#4f5662]"}
            `}/>
        </div>
    )
}

export default Avatar