import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"

function AuthCallback() {

    const navigate = useNavigate();

    const tokenProcessed = useRef(false)

    useEffect(() => {

        if (tokenProcessed.current) return
        tokenProcessed.current = true

        const params = new URLSearchParams(
            window.location.search
        )

        const token = params.get("token")

        if (token) {
            localStorage.setItem("token", token)
            navigate("/chat", { replace: true })
        } else {
            navigate("/auth/signin")
        }

    }, [navigate])

    return (
        <div>
            Signin you in...
        </div>
    )
}

export default AuthCallback