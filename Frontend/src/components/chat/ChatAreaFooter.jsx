import { useState } from "react"
import EmojiIcon from "../../assets/emoji.svg?react"
import AttachFilesIcon from "../../assets/files.svg?react"
import AttactImageIcon from "../../assets/image.svg?react"
import SendIcon from "../../assets/send.svg?react"
import ChatAction from "./ChatAction"
import ChatInput from "./ChatInput"

function ChatAreaFooter() {
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col gap-2 bg-white dark:bg-[#13131E]/80 p-4">
      <div className="flex gap-2 items-end">
        <div className="flex mb-0.5 gap-1 items-end">
          <ChatAction
            Icon={EmojiIcon}
          />
          <ChatAction
            Icon={AttactImageIcon}
          />
          <ChatAction
            Icon={AttachFilesIcon}
          />
        </div>
        <ChatInput
          message={message}
          setMessage={setMessage}
        />
        <div className={`flex cursor-pointer rounded-xl ease-in-out justify-center mb-0.5 items-center w-9 h-9
            ${message ? "bg-[#7f22fe] text-white" : "text-[#4A5565] bg-[#E5E7EB] dark:bg-white/5"}
          `}>
          <SendIcon />
        </div>
      </div>
      <div className="text-[399A1AF] dark:text-[#364153] leading-4 text-xs text-center">🔒 Messages are end-to-end encrypted</div>
    </div>
  )
}

export default ChatAreaFooter