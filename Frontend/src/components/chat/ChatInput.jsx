function ChatInput() {
  return (
    <div className="flex flex-1 w-full px-4 h-10 gap-2 text-[14px] items-center search-bg chat-border rounded-[14px]">
      <div className="flex w-full items-center justify-center gap-2">
        <input
          placeholder="Type a message..."
          className="flex-1 min-w-0 outline-none bg-transparent dark:text-white"
        />
      </div>
    </div>
  )
}

export default ChatInput