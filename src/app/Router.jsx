import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ChatPage from "../pages/ChatPage";
import LoginForm from "../components/auth/LoginForm";
import RegistrationForm from "../components/auth/RegistrationForm";

export const router = createBrowserRouter([
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
        element: <ChatPage />
    },
])

function AppRouter() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter