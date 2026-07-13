import DoubleTickIcon from "../../assets/doubleTick.svg?react"

function MessageBubble({ message, sent, timeStamp, status }) {

    const date = new Date(timeStamp)
    const time = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    })

    return (
        <div className={`max-w-3/4 flex flex-col
        ${sent ? "self-end" : "self-start"}
        `}>
            <div className={`px-3.5 py-2.5 rounded-[18px] shadow leading-[22.8px] text-[15px]
            ${sent ? "bg-[#7F22FE] text-white rounded-tr-md" : "dark:bg-[#1E1E30] bg-[#ffffff] rounded-tl-md"}
            `}>
                {message}
            </div>
            <div className={`p-1 flex gap-1
                ${sent ? "self-end" : "self-start"}
                `}>
                {sent && (
                    <div className={`self-center
                    ${status === "read" ? "text-[#A684FF]" : "[#99A1AF]"}
                    `}>
                        <DoubleTickIcon />
                    </div>
                )}
                <div className="dark:text-[#4A5565] text-[#99A1AF] text-[12px] leading-4">
                    {time}
                </div>
            </div>
        </div>
    )
}

export default MessageBubble