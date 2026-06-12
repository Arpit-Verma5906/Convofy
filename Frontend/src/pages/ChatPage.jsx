import { useNavigate } from "react-router-dom"
import { useEffect } from "react";
import api from "../api/axios";
import ChatLayout from "../layouts/ChatLayout";
import { useAuth } from "../components/context/AuthContext";

function ChatPage() {

  const navigate = useNavigate()
  const { setUser } = useAuth()
  function handleLogout() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/")
  }

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get("/auth/profile")
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfile()
  }, [])

  return (
    <div className="flex flex-col gap-2">
      <ChatLayout />
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