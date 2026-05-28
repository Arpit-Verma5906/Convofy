import { useNavigate } from "react-router-dom"

function ChatPage() {

  const navigate = useNavigate()
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/")
  }

  return (
    <div className="flex flex-col gap-2">
      <div>The chat's will appear here</div>
      <button
        className="cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>

  )
}

export default ChatPage