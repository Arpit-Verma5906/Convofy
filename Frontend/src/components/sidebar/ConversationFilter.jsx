import FilterButton from "./FilterButton"
import Group from "../../assets/groups.svg?react"
import Chat from "../../assets/chat.svg?react"

function ConversationFilter() {
  return (
    <div className="flex justify-between gap-2">
        <FilterButton   
            label="All"
        />
        <FilterButton 
            Icon={Chat}
            label="DMs"
        />
        <FilterButton 
            Icon={Group}
            label="Groups"
        />
    </div>
  )
}

export default ConversationFilter