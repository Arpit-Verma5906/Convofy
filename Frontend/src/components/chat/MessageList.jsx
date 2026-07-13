import MessageBubble from "./MessageBubble"

function MessageList({ selectedConversation }) {
    return (
        <div className="flex flex-col px-7 gap-3">
            {selectedConversation.messages.map((message) => (
                <MessageBubble 
                    message={message.text}
                    sent={message.sender === "me"}
                    timeStamp={message.time}
                    status={message.status}
                />
            ))}
        </div>
    )
}

export default MessageList