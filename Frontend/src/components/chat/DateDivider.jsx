function DateDivider({ date }) {

    function formatDateDivider(date) {
        const messageDate = new Date(date);

        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        const messageDay = new Date(messageDate);
        messageDay.setHours(0, 0, 0, 0);

        const todayDay = new Date(today);
        todayDay.setHours(0, 0, 0, 0);

        if(messageDay.getTime() === todayDay.getTime()) {
            return "Today";
        }

        if(messageDay.getTime() === new Date(yesterday.setHours(0, 0, 0, 0)).getTime()) {
            return "Yesterday";
        }

        const diffDays = (todayDay - messageDay) / (1000 * 60 * 60 * 24);
        if(diffDays < 7) {
            return messageDate.toLocaleDateString("en-IN", {
                weekday: "long",
            })
        }

        return messageDate.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }

    return (
        <div className="flex gap-3 mb-2">
            <div className="flex w-full items-center">
                <div className="flex-1 line bg-[#E5E7EB] dark:bg-white/10 h-px"></div>
            </div>
            <div className="bg-[#F3F4F6] dark:bg-[#8E51FF]/10 ring dark:ring-[#8E51FF]/20 whitespace-nowrap px-3 py-1 leading-4 text-[12px] dark:text-white text-[#6A7282] rounded-full">
                <div>{ formatDateDivider(date) }</div>
            </div>
            <div className="flex w-full items-center">
                <div className="flex-1 line bg-[#E5E7EB] dark:bg-white/10 h-px"></div>
            </div>
        </div>
    )
}

export default DateDivider