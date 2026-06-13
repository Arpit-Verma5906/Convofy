import ConversationCard from "./ConversationCard"

function ConversationList({ conversationList, selectedId, setSelectedId}) {

    return (
        <div className="flex flex-col gap-2">
            {conversationList.map((conversation) => (
                <ConversationCard 
                    key={conversation.id}
                    conversation={conversation}
                    isSelected={selectedId === conversation.id}
                    onClick={() => setSelectedId(conversation.id)}
                />
            ))}
        </div>
    )
}

export default ConversationList