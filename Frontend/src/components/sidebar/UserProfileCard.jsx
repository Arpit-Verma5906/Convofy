import { useAuth } from "../context/AuthContext"
import Avatar from "../ui/Avatar";

function UserProfileCard({ isOnline = true }) {
    const { user, loading } = useAuth();

    if (loading) return <div>Loading...</div>;

    return (
        <div className="select-none">
            <div className="flex items-center">
                <div className="flex-1 line bg-[#E5E7EB] dark:bg-white/10 h-px"></div>
            </div>
            <div className="p-5 flex items-center between w-full gap-3">
                <div>
                    <Avatar
                        isOnline={isOnline}
                        avatar={user.avatar}
                        username={user.username}
                    />
                </div>
                <div className="h-9 flex flex-col flex-1 justify-center">
                    <div className="font-semibold text-[14px] leading-5 heading-text">
                        {user?.displayName}
                    </div>
                    <div className="font-medium text-xs leading-4 empty-hero-text">
                        @{user?.username}
                    </div>
                </div>
                <div className="w-2 h-2">
                    <div className={`rounded-full w-full h-full
                        ${isOnline ? "bg-[#00D492]" : "bg-[#6a7282]"}
                        `} />
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard