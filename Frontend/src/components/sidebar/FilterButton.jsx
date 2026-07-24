function FilterButton({ Icon, label, isActive, onClick }) {
    return (
        <div 
        className={`flex select-none w-full gap-1.25 rounded-[10px] cursor-pointer text-xs leading-4 justify-center items-center h-7
            ${isActive ? "active-filter text-white font-semibold" : "empty-hero-text  filter-bg"}
        `}
        onClick={onClick}>
            {Icon && <Icon className="w-3 h-3"/>}
            <div>
                {label}
            </div>
        </div>
    )
}

export default FilterButton