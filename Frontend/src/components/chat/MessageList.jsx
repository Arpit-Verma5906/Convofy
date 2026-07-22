import DateDivider from "./DateDivider"
import MessageBubble from "./MessageBubble"

function MessageList({ selectedConversation }) {
    return (
        <div className="flex flex-col px-7 gap-2">
            {selectedConversation.messages.map((message, index) => {
                const currentDate = new Date(message.time).toDateString();

                const previousDate = index > 0 ? new Date(
                    selectedConversation.messages[index - 1].time
                ).toDateString() : null;

                const shouldShowDivider = currentDate !== previousDate;
                
                return (
                    <>
                        {shouldShowDivider && (
                            <DateDivider
                                date={message.time}
                            />
                        )}

                        <MessageBubble
                            message={message.text}
                            sent={message.sender === "me"}
                            timeStamp={message.time}
                            status={message.status}
                        />
                    </>
                )
            })}
        </div>
    )
}

export default MessageList