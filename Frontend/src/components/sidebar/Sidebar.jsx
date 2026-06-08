import { useState } from "react"
import SearchBar from "./SearchBar"
import SidebarHeader from "./SidebarHeader"
import ConversationFilter from "./ConversationFilter";

function Sidebar() {

    const [activeFilter, setActiveFilter] = useState("all");

    return (
        <div className="lg:w-1/4 w-full sidebar-bg app-text">
            <div className="p-4 flex flex-col gap-5">
                <SidebarHeader
                    unreadMessage="7"
                />
                <div className="flex flex-col gap-2">
                    <SearchBar />
                    <ConversationFilter
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sidebar