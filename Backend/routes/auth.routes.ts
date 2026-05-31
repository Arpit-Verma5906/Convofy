import { Router, type Request, type Response } from "express";
import User from "../models/user.model";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import passport from "passport"
import authMiddleware from "../middleware/auth.middleware";

const router = Router()

router.get("/", (req: Request, res: Response) => {
    res.send("Auth Route Working")
})

router.get("/profile", authMiddleware, async (req: Request, res: Response) => {

    const userId = (req as any).user.userId
    const user = await User.findById(userId)

    if(!user) {
        return res.status(404).json({
            message: "User Not Found",
        })
    }

    res.json({
        user: {
            id: user.id,
            displayName: user.displayName,
            username: user.username,
            email: user.email,
            avatar: user.avatar,
            bio: user.bio,
        }
    })
})

router.get("/google", (req, res, next) => {
        console.log("GOOGLE ROUTE HIT")
        next()
    },
    passport.authenticate(
        "google",
        {
            scope: ["profile", "email"],
        }
    )
)

router.get("/google/callback",
    passport.authenticate(
        "google", {
        session: false,
        failureRedirect: "/auth/signin",
    }),

    async (req: Request, res: Response) => {

        console.log("CALLBACK HIT")
        console.log(req.user)

        const user = req.user as any

        const token = jwt.sign({
            userId: user.id,
        }, process.env.JWT_SECRET!, {
            expiresIn: "7d",
        })

        console.log("TOKEN CREATED")

        res.redirect(`http://localhost:5173/auth/callback?token=${token}`)
    }
)

router.post("/login", async (req: Request, res: Response) => {

    const {
        email,
        password,
    } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({
                message: "Invalid Credentials"
            })
        }

        if (!user.password) {
            return res.status(500).json({
                message: "Server Error"
            })
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }

        const token = jwt.sign({
            userId: user.id,
        }, process.env.JWT_SECRET!, {
            expiresIn: "7d",
        })

        res.status(200).json({
            message: "Login Successful",
            token,
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
    catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
})

router.post("/register", async (req: Request, res: Response) => {

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

        if (existingEmail) {
            return res.status(400).json({
                message: "Email already in use"
            })
        }

        const existingUsername = await User.findOne({ username })

        if (existingUsername) {
            return res.status(400).json({
                message: "Username already taken"
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 10)

        const user = await User.create({
            displayName,
            username,
            email,
            password: hashedPassword,
            avatar,
            bio,
        })

        const token = jwt.sign({
            userId: user.id,
        }, process.env.JWT_SECRET!, {
            expiresIn: "7d",
        })

        res.status(201).json({
            message: "Account Created Successfully",
            token,
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
    catch (error) {
        res.status(500).json({
            message: "Server Error",
        })
    }
})

export default router