function FloatingMessage({ text, x, y, delay, duration }) {
  return (
    <div className="animate-fade-up opacity-0 bubble-text absolute max-w-50 text-[14px] leading-4 px-4 py-2.5 rounded-[18px] shadow-[0_12px_32px_rgba(0,0,0,0.16)]"
    style={{
        left: x,
        top: y,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
    }}>
        {text}
    </div>
  )
}

export default FloatingMessage