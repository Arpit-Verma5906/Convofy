import Sidebar from "../components/sidebar/Sidebar"
import EmptyState from "../components/chat/EmptyState"
import ThemeToggle from "../theme/ThemeToggle"

function ChatLayout() {
  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <EmptyState />
      </div>
      <ThemeToggle />
    </>
  )
}

export default ChatLayout