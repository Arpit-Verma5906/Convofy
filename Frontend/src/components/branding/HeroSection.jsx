import FeatureBadges from "./FeatureBadges"
import HeroImg from "../../assets/convofy.svg?react"
import FloatingMessages from "./FloatingMessages"
import ThemeToggle from "../../theme/ThemeToggle"

function HeroSection() {
  return (
    <div className="flex flex-col select-none justify-center items-center app-bg lg:min-h-screen min-h-120 lg:w-[66%]">
      <FloatingMessages />
      <div>
        <HeroImg className="w-16 mb-4" />
      </div>
      <div className="font-bold text-5xl leading-12 mb-4 heading-text">
        Convofy
      </div>
      <div className="text-[20px] leading-7 mb-2 text-[#4A5565] dark:text-[#D1D5DC]">
        Real conversations, real connections.
      </div>
      <div className="text-[16px] leading-6 text-[#6A7282] mb-8">
        End-to-end encrypted. Always private.
      </div>
      <div className="lg:flex lg:flex-row grid grid-cols-2 gap-3">
        <FeatureBadges
          name="🔒 E2E Encrytped"
        />
        <FeatureBadges
          name="⚡ Real Time"
        />
        <ThemeToggle />
        <FeatureBadges
          name="📱 Mobile Ready"
        />
      </div>
    </div>
  )
}

export default HeroSection