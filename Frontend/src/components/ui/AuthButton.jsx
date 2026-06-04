function AuthButton({label}) {
    return (
        <button
            type="submit"
            className="w-full select-none cursor-pointer h-12 rounded-xl bg-purple-600 hover:bg-purple-500 transition-colors font-medium text-white">
            {label}
        </button>
    )
}

export default AuthButton