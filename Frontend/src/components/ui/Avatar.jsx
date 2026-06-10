import { useAuth } from "../context/AuthContext"

function Avatar() {

  const { user } = useAuth()

  return (
    <div>
      <img alt="Avatar" src={user?.avatar} referrerPolicy="no-referrer"/>
    </div>
  )
}

export default Avatar