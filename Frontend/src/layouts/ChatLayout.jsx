import Sidebar from "../components/chat/Sidebar"
import EmptyState from "../components/chat/EmptyState"

function ChatLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <EmptyState />
      </div>
    </>
  )
}

export default ChatLayout