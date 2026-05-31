function TermsText() {
    return (
        <div className="text-[12px] leading-4 input-value">
            <span>By contuining, you agree to our {" "}</span>
            <span className="text-[14px] font-medium leading-6 text-[#A684FF] cursor-pointer hover:underline hover:underline-[#A684FF]">Terms</span>
            <span>{" "} and {" "}</span>
            <span className="text-[14px] font-medium leading-6 text-[#A684FF] cursor-pointer hover:underline hover:underline-[#A684FF]">Privacy Policy</span>
        </div>
    )
}

export default TermsText