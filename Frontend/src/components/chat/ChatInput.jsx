import { useRef } from "react"

function ChatInput({ message, setMessage }) {
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    setMessage(e.target.value)

    const textarea = textAreaRef.current
    textarea.style.height = "0px"
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  return (
      <div className="flex flex-1 text-[14px] wrap-break-word leading-5 px-4 py-1 items-center search-bg chat-border rounded-[14px] w-full min-h-10">
        <textarea
          ref={textAreaRef}
          value={message}
          onChange={handleChange}
          rows={1}
          placeholder="Type a message..."
          className="flex-1 resize-none outline-none bg-transparent wrap-break-word overflow-hidden max-h-24 overflow-y-scroll dark:text-white"
        />
    </div>
  )
}

export default ChatInput