import Avatar from "../ui/Avatar"

function ConversationCard({ conversation, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex px-3 mx-2 gap-3 cursor-pointer duration-500 hover:ml-2.5 hover:mr-1.5 rounded-[10px]
    ${isSelected ? "selected-conversation-card ring-2 ring-[#DDD6FF] dark:ring-[#b085ff]/15 shadow" : "conversation-card"}
    `}>
      {isSelected &&
        (<div className="flex my-1.5 rounded-full bg-[#cdc4fb] dark:bg-[#b085ff]/25 items-center">
          <div className="flex-1 line w-1"></div>
        </div>)}
      <div className="py-3">
        <Avatar
          isOnline={conversation.isOnline}
          avatar={conversation.avatar}
          username={conversation.username}
          type={conversation.type}
        />
      </div>
      <div className="flex-1 min-w-0 flex py-3 flex-col gap-1.25">
        <div className="flex items-center gap-2">
          <div
            className={`flex-1 min-w-0 truncate text-[14px] font-semibold leading-5
            ${isSelected ? "text-[#A684FF]" : "heading-text"}`}
          >
            {conversation.name}
          </div>
          <div className="shrink-0 text-xs font-[450] leading-4 text-[#6A7282] dark:text-[#ffffff]/30">
            {conversation.updatedAt}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className={`flex-1 min-w-0 truncate font-[450] text-xs leading-4
              ${isSelected ? "text-[#323a46] dark:text-[#ffffff]/65" : "text-[#5e6674] dark:text-[#ffffff]/50"}
            `}>
            {conversation.lastMessage}
          </div>
          {conversation.unreadCount > 0 && (
            <div className=" h-5 min-w-5 px-1 flex items-center justify-center text-white rounded-lg text-[10px] font-bold leading-4 active-filter">
              {conversation.unreadCount}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConversationCard