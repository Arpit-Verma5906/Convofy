import SearchIcon from "../../assets/search.svg?react"
import ConversationFilter from "./ConversationFilter"

function SearchBar() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex w-full px-4 h-10 gap-2 text-[14px] items-center search-bg chat-border rounded-[14px]">
                <div className="flex w-full items-center justify-center gap-2">
                    <SearchIcon className="w-4 h-4 input-value" />
                    <input
                        placeholder="Search Conversations..."
                        className="flex-1 min-w-0 outline-none bg-transparent dark:text-white"
                    />
                </div>
            </div>
            <ConversationFilter />
        </div>

    )
}

export default SearchBar