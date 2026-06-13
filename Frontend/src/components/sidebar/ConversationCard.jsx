import Avatar from "../ui/Avatar"

function ConversationCard({ key, conversation, isSelected, onClick }) {
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
        displayName={conversation.name}
      />
      <div className="w-full flex flex-col justify-center gap-0.75">
        <div className="flex justify-between">
          <div className={`text-[14px] font-semibold leading-5
            ${isSelected ? "text-[#A684FF]" : "heading-text"}`}>
            {conversation.name}
          </div>
          <div className="text-xs font-medium leading-4 input-value">
            {conversation.updatedAt}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-xs font-medium leading-4 h-4 text-[#6A7282] overflow-x-scroll">
            {conversation.lastMessage}
          </div>
          <div className={`h-5 flex items-center justify-center text-white rounded-full w-5 text-xs font-bold leading-4 bg-[#8E51FF]
              ${conversation.unreadCount !== 0 ? "block" : "hidden"}
            `}>
            {conversation.unreadCount}
          </div>
        </div>
      </div>
    </div >
  )
}

export default ConversationCard