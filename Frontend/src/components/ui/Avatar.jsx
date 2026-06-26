import { getAvatarColours } from "../utils/avatarUtils"

function Avatar({ isOnline = false, avatar, username = "", type = "dm"}) {
    return (
        <div className="select-none relative">
            {avatar
                ? <div className="h-11 w-11 overflow-hidden rounded-full shrink-0">
                    <img alt="Avatar" src={avatar} referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                </div>
                : <div className="h-11 w-11 flex items-center text-white justify-center rounded-full"
                    style={{
                        backgroundColor: getAvatarColours(username)
                    }}
                >
                    {username?.[0]?.toUpperCase() || "?"}
                </div>
            }
            {type !== "group" && <div className={`absolute bottom-0.75 right-0.75 ring-2 w-1.25 h-1.25 rounded-full
            ${isOnline ? "bg-[#00d492] ring-[#009c6b]" : "bg-[#6a7282] ring-[#4f5662]"}
            `} />}
        </div>
    )
}

export default Avatar