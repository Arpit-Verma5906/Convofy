import Logo from "../../assets/convofy.svg?react"
import NewChat from "../../assets/newChat.svg?react"
import Settings from "../../assets/settings.svg?react"
import ChatAction from "./ChatAction"

function SidebarHeader({ unreadMessage }) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <Logo className="w-8 h-8" />
        <div className="flex gap-2">
          <div className="text-[18px] self-center leading-6 font-bold">
            Convofy
          </div>
          <div className={`px-2.5 py-0.5 text-[#A684FF] bg-[rgba(142,81,255,0.2)] flex items-center self-center justify-center rounded-4xl
        ${unreadMessage === "0" ? "hidden" : "block"}
        `}>
            {unreadMessage}
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <ChatAction 
          Icon={NewChat}
        />
        <ChatAction 
          Icon={Settings}
        />
      </div>
    </div>
  )
}

export default SidebarHeader