import { useState } from "react"
import SearchBar from "./SearchBar"
import SidebarHeader from "./SidebarHeader"
import ConversationFilter from "./ConversationFilter";
import UserProfileCard from "./UserProfileCard";
import ConversationList from "./ConversationList";

function Sidebar({ initialConversationList, selectedId, setSelectedId }) {

    const [conversationList, setConversationList] = useState(initialConversationList) 
    const [activeFilter, setActiveFilter] = useState("all");
    let unreadCount = 0; 

    for (let i = 0; i < conversationList.length; i++) {
        unreadCount += conversationList[i].unreadCount;
    }

    return (
        <div className="lg:w-1/4 w-full max-h-screen sidebar-bg app-text">
            <div className="flex h-full flex-col">
                <div className="p-4 flex flex-col gap-5">
                    <SidebarHeader
                        unreadMessage={unreadCount}
                    />
                    <div className="flex flex-col gap-2">
                        <SearchBar />
                        <ConversationFilter
                            activeFilter={activeFilter}
                            setActiveFilter={setActiveFilter}
                        />
                    </div>
                </div>
                <div className="flex-1 py-1.5 overflow-y-auto">
                    <ConversationList 
                    conversationList={conversationList}
                    setConversationList={setConversationList}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    activeFilter={activeFilter}
                    />
                </div>
                <UserProfileCard />
            </div>
        </div>
    )
}

export default Sidebar