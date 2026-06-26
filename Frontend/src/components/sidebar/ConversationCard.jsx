import Avatar from "../ui/Avatar"

function ConversationCard({ conversation, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex p-3 mx-2 gap-3 cursor-pointer transition-all duration-500 hover:ml-2.5 hover:mr-1.5 rounded-[14px]
    ${isSelected ? "selected-conversation-card ring-2 ring-[#DDD6FF] dark:ring-[#8E51FF]/20" : "conversation-card"}
    `}

    >
      <Avatar
        isOnline={conversation.isOnline}
        avatar={conversation.avatar}
        username={conversation.username}
        type={conversation.type}
      />
      <div className="flex-1 min-w-0 flex flex-col justify-center gap-1">
        <div className="flex items-center gap-2">
          <div
            className={`flex-1 min-w-0 truncate text-[14px] font-semibold leading-5
            ${isSelected ? "text-[#A684FF]" : "heading-text"}`}
          >
            {conversation.name}
          </div>
          <div className="shrink-0 text-xs font-medium leading-4 input-value">
            {conversation.updatedAt}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 min-w-0 truncate text-xs font-medium leading-4 text-[#6A7282]">
            {conversation.lastMessage}
          </div>
          {conversation.unreadCount > 0 && (
            <div className=" h-5 min-w-5 px-1 flex items-center justify-center text-white rounded-full text-[10px] font-bold leading-4 bg-[#8E51FF]">
              {conversation.unreadCount}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ConversationCard