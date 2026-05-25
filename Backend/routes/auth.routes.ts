import { Router, type Request, type Response } from "express";
import User from "../models/user.model";

const router = Router()

router.get("/", (req: Request, res: Response) => {
    res.send("Auth Route Working")
})

router.post("/login", (req: Request, res: Response) => {
    res.json({
        message: "Login Successful!",
    })
})

router.post("/register", async(req: Request, res: Response) => {

    const {
        displayName,
        username,
        email,
        password,
        avatar,
        bio,
    } = req.body

    try {
        const existingEmail = await User.findOne({ email })

        if(existingEmail) {
            return res.status(400).json({
                message: "Email already in use"
            })
        }

        const existingUsername = await User.findOne({ username })

        if(existingUsername) {
            return res.status(400).json({
                message: "Username already taken"
            })
        }

        const user = await User.create({
            displayName,
            username,
            email,
            password,
            avatar,
            bio,
        })

        res.status(200).json({
            message: "Account Created Successfully",
            user: {
                id: user.id,
                displayName: user.displayName,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                bio: user.bio,
            }
        })
    } 
    catch(error) {
        res.status(500).json({
            message: "Server Error",
        })
    }
})

export default router