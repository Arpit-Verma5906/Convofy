import AuthSection from "./AuthSection"
import HeroSection from "./branding/HeroSection"

function AuthLayout() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen min-w-screen">
            <HeroSection />
            <AuthSection />
        </div>
    )
}

export default AuthLayout