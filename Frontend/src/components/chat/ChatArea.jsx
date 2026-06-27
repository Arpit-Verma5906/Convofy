import ChatAreaFooter from "./ChatAreaFooter"
import ChatAreaHeader from "./ChatAreaHeader"

function ChatArea({ selectedConversation }) {

    return (
        <div className="bg-[#f5f5fa] dark:bg-[#0D0D14] max-h-screen flex flex-col app-text w-3/4">
            <ChatAreaHeader
                isOnline={selectedConversation.isOnline}
                avatar={selectedConversation.avatar}
                username={selectedConversation.username}
                displayName={selectedConversation.name}
                lastSeen={selectedConversation.lastSeen}
            />
            <div className="flex items-center">
                <div className="flex-1 line bg-[#E5E7EB] dark:bg-white/10 h-px"></div>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
                <div>
                    {selectedConversation?.name}
                </div>
                <div>
                    {selectedConversation?.lastMessage}
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex-1 line bg-[#E5E7EB] dark:bg-white/10 h-px"></div>
            </div>
            <ChatAreaFooter />
        </div>
    )
}

export default ChatArea