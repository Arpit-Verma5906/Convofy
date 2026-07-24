import ConversationCard from "./ConversationCard"

function ConversationList({ conversationList, setConversationList, selectedId, setSelectedId, activeFilter }) {

    const filteredConversations = conversationList.filter((conversation) => {
        if (activeFilter === "all") return true;
        return conversation.type === activeFilter
    })

    return (
        <div className="flex flex-col gap-2.5">
            {filteredConversations.map((conversation) => (
                <ConversationCard
                    key={conversation.id}
                    conversation={conversation}
                    isSelected={selectedId === conversation.id}
                    onClick={() => {
                        setSelectedId(conversation.id);

                        setConversationList(prev =>
                            prev.map(conv =>
                                conv.id === conversation.id
                                    ? { ...conv, unreadCount: 0 }
                                    : conv
                            )
                        )
                    }}
                />
            ))}
        </div>
    )
}

export default ConversationList