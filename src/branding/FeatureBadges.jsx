function FeatureBadges({ name }) {
  return (
    <div className="px-5 py-2.5 bg-[#ffffff] dark:bg-[#25252b] rounded-4xl border dark:border-[#3b3b40] border-[#E5E7EB] text-center">
        <div className="text-[14px] leading-5 text-[#364153] dark:text-[#D1D5DC]">
            {name}
        </div>
    </div>
  )
}

export default FeatureBadges