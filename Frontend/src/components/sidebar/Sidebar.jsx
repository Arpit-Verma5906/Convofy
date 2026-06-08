import SearchBar from "./SearchBar"
import SidebarHeader from "./SidebarHeader"

function Sidebar() {

    return (
        <div className="lg:w-1/4 w-full sidebar-bg app-text">
            <div className="p-4 flex flex-col gap-5">
                <SidebarHeader 
                    unreadMessage="7"
                />
                <SearchBar />
            </div>
        </div>
    )
}

export default Sidebar