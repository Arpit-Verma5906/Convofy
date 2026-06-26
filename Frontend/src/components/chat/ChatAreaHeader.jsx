import Avatar from "../ui/Avatar"
import ChatAction from "./ChatAction"
import SearchIcon from "../../assets/search.svg?react"
import InfoIcon from "../../assets/info.svg?react"

function ChatAreaHeader({ isOnline, avatar, username, displayName, lastSeen }) {
    return (
        <div className="px-4 py-3 flex gap-3 h-16 bg-[#13131E]/80">
            <div>
                <div className="w-min h-min">
                    <Avatar
                        isOnline={isOnline}
                        avatar={avatar}
                        username={username}
                    />
                </div>
            </div>
            <div className="select-none gap-px flex h-11 flex-col flex-1">
                <div className="font-semibold text-[17px] leading-5">
                    {displayName}
                </div>
                <div className={`font-medium text-[13px] leading-6
                    ${lastSeen === "Online" ? "text-[#00D492]" : "empty-hero-text"}
                    `}>
                    {lastSeen}
                </div>
            </div>
            <div className="flex gap-1 items-center">
                <ChatAction
                    Icon={SearchIcon}
                />
                <ChatAction
                    Icon={InfoIcon}
                />
            </div>
        </div>
    )
}

export default ChatAreaHeader