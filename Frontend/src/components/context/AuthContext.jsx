import { createContext, useContext, useState, useEffect } from "react"
import api from "../../api/axios"

const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await api.get("/auth/profile")
                setUser(response.data.user)
            }
            catch (error) {
                console.error(error);
                setUser(null);
            }
            finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, [])

    return (
        <AuthContext.Provider
            value={{ user, setUser, loading }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}