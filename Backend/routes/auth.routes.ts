import { Router, type Request, type Response } from "express";

const router = Router()

router.get("/", (req: Request, res: Response) => {
    res.send("Auth Route Working")
})

router.post("/login", (req: Request, res: Response) => {
    res.json({
        message: "Login Successful!",
    })
})

router.post("/register", (req: Request, res: Response) => {
    res.json({
        message: "New Account Created"
    })
})

export default router