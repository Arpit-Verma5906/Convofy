import EmojiIcon from "../../assets/emoji.svg?react"
import AttachFilesIcon from "../../assets/files.svg?react"
import AttactImageIcon from "../../assets/image.svg?react"
import SendIcon from "../../assets/send.svg?react"
import ChatAction from "./ChatAction"
import ChatInput from "./ChatInput"

function ChatAreaFooter() {
  return (
    <div className="flex flex-col gap-2 bg-white dark:bg-[#13131E]/80 p-4">
      <div className="flex gap-2 items-center">
        <div className="flex gap-1">
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
        <ChatInput />
        <div>
          <ChatAction
            Icon={SendIcon}
          />
        </div>
      </div>
      <div className="text-[399A1AF] dark:text-[#364153] leading-4 text-xs text-center">🔒 Messages are end-to-end encrypted</div>
    </div>
  )
}

export default ChatAreaFooter