import SidebarHeader from "./SidebarHeader"

function Sidebar() {
    return (
        <div className="lg:w-1/4 w-full sidebar-bg app-text">
            <div className="p-4">
                <SidebarHeader 
                    unreadMessage="7"
                />
            </div>
        </div>
    )
}

export default Sidebar