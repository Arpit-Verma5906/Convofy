import Sidebar from "../components/sidebar/Sidebar"
import EmptyState from "../components/chat/EmptyState"
import { conversationList } from "../mock/conversationList";
import { useState } from "react";
import ChatArea from "../components/chat/ChatArea";

function ChatLayout() {

  const [selectedId, setSelectedId] = useState(null)
  console.log(selectedId);

  return (
    <>
      <div className="flex app-bg app-text min-h-screen">
        <Sidebar
          initialConversationList={conversationList}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        <div className="flex bg-[#E5E7EB] dark:bg-white/10 items-center">
          <div className="flex-1 line w-px"></div>
        </div>

        {selectedId !== null && <ChatArea
          selectedConversation={conversationList[selectedId - 1]}
        />}

        {selectedId === null && <EmptyState />}
      </div>
    </>
  )
}

export default ChatLayout