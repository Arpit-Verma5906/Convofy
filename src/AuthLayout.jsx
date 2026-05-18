import AuthCard from "./components/auth/AuthCard"
import HeroSection from "./components/branding/HeroSection"

function AuthLayout() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen min-w-screen">
            <HeroSection />
            <AuthCard />
        </div>
    )
}

export default AuthLayout