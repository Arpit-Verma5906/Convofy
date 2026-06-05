function ChatButton({ Icon, label }) {
    return (
        <button
            type="submit"
            className="w-full flex gap-2 justify-center items-center select-none cursor-pointer h-12 rounded-xl bg-purple-600 hover:bg-purple-500 transition-colors font-medium text-white">
            <Icon className="w-5 h-5" />
            {label}
        </button>
    )
}

export default ChatButton