import FloatingMessage from "./FloatingMessage"
import { useLocation } from "react-router-dom"

function FloatingMessages() {

    const location = useLocation();
    const signin = location.pathname === "/auth/signin" || location.pathname === "/auth/signin/";

    const messages = [
        {
            text: "Hey! Got your message 👋",
            x: "7.5%",
            y: "17%",
            delay: 2,
            duration: 11.8,
        }, {
            text: "The design looks amazing! 😍",
            x: "39%",
            y: "10%",
            delay: 2.9,
            duration: 12,
        }, {
            text: "Perfect Thanks! 🎉",
            x: "51%",
            y: "45%",
            delay: 3.8,
            duration: 12.2,
        }, {
            text: "Let's sync up later ✨",
            x: "39%",
            y: `${signin ? "85%" : "105%"}`,
            delay: 4.7,
            duration: 11.9,
        }, {
            text: "LOL! Seriously!? 😭😭😭",
            x: "11%",
            y: `${signin ? "78%" : "95%"}`,
            delay: 5.6,
            duration: 12.1,
        }
    ]

    return (
        <div className="hidden lg:block">
            {messages.map((message) => (
                <FloatingMessage
                    key={message.text}
                    {...message}
                />
            ))}
        </div>
    )
}

export default FloatingMessages