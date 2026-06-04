import Logo from "../../assets/convofy.svg?react"
import Encryption from "../../assets/encryption.svg?react"
import Lightning from "../../assets/lightning.svg?react"
import Group from "../../assets/group.svg?react"
import FeatureItem from "./FeatureItem"
import ChatButton from "../ui/ChatButton"
import Chat from "../../assets/chat.svg?react"

function EmptyState() {
    return (
        <div className="w-3/4 flex chat-bg app-text justify-center items-center">
            <div className="flex flex-col max-w-[384px] items-center gap-7">
                <Logo className="w-20 h-20" />
                <div className="flex flex-col items-center gap-1">
                    <div className="heading-text text-2xl font-bold leading-8">
                        Welcome To Convofy
                    </div>
                    <div className="empty-hero-text leading-5 text-center">
                        Select a conversation to start messaging, or start a new one
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <FeatureItem
                        Icon={Encryption}
                        label="End-to-End Encrypted"
                        description="Every message is secured with E2EE"
                    />
                    <FeatureItem
                        Icon={Lightning}
                        label="Real-Time Message"
                        description="Instant delivery via WebSockets"
                    />
                    <FeatureItem
                        Icon={Group}
                        label="Group Chats"
                        description="Stay connected with your team"
                    />
                </div>
                <ChatButton 
                    Icon={Chat}
                    label="Start a New Conversation"
                />
            </div>
        </div>
    )
}

export default EmptyState