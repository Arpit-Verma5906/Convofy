import Sidebar from "../components/sidebar/Sidebar"
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