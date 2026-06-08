function FilterButton({ Icon, label }) {
    return (
        <div className="flex w-full gap-1.25 rounded-[10px] filter-bg cursor-pointer text-xs leading-4 empty-hero-text justify-center items-center h-7">
            {Icon && <Icon className="w-3 h-3"/>}
            <div>
                {label}
            </div>
        </div>
    )
}

export default FilterButton