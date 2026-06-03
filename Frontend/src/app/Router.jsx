import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ChatPage from "../pages/ChatPage";
import LoginForm from "../components/auth/LoginForm";
import RegistrationForm from "../components/auth/RegistrationForm";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import AuthCallback from "../pages/AuthCallback";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/auth/signin" replace />,
    }, {
        path: "/auth",
        element: <AuthPage />,
        children: [{
            path: "signin",
            element: <LoginForm />
        }, {
            path: "signup",
            element: <RegistrationForm />
        }],
    }, {
        path: "/chat",
        element: (
            <ProtectedRoute>
                <ChatPage />
            </ProtectedRoute>
        )
    }, {
        path: "/auth/callback",
        element: <AuthCallback />
    }
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter