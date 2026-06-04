function FeatureItem({ Icon, label, description }) {
    return (
        <div className="p-3 feature-item-bg w-full flex gap-3 rounded-[14px] ring-1 ring-[#E5E7EB] dark:ring-[#25252b]">
            <Icon className="w-10 h-10"/>
            <div>
                <div className="text-[14px] leading-5 font-semibold">
                    {label}
                </div>
                <div className="text-xs leading-4 input-value">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default FeatureItem