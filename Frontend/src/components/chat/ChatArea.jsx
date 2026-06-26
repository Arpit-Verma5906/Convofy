import ChatAreaHeader from "./ChatAreaHeader"

function ChatArea({ selectedConversation }) {

    return (
        <div className="bg-[#0D0D14] app-text w-3/4">
            <ChatAreaHeader 
                isOnline={selectedConversation.isOnline}
                avatar={selectedConversation.avatar}
                username={selectedConversation.username}
                displayName={selectedConversation.name}
                lastSeen={selectedConversation.lastSeen}
            />
            <div>
                {selectedConversation?.name}
            </div>
            <div>
                {selectedConversation?.lastMessage}
            </div>
        </div>
    )
}

export default ChatArea