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
      <div className="flex min-h-screen">
        <Sidebar
          initialConversationList={conversationList}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        {selectedId !== null && <ChatArea
          selectedConversation={conversationList[selectedId-1]}
        />}

        {selectedId === null && <EmptyState />}
      </div>
    </>
  )
}

export default ChatLayout