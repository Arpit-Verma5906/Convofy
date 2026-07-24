import FilterButton from "./FilterButton"
import Group from "../../assets/groups.svg?react"
import Chat from "../../assets/chat.svg?react"

function ConversationFilter({ activeFilter, setActiveFilter }) {
    return (
        <div className="flex justify-between gap-3 mx-1">
            <FilterButton
                label="All"
                isActive={activeFilter === "all"}
                onClick={() => setActiveFilter("all")}
            />
            <FilterButton
                Icon={Chat}
                label="DMs"
                isActive={activeFilter === "dm"}
                onClick={() => setActiveFilter("dm")}
            />
            <FilterButton
                Icon={Group}
                label="Groups"
                isActive={activeFilter === "group"}
                onClick={() => setActiveFilter("group")}
            />
        </div>
    )
}

export default ConversationFilter