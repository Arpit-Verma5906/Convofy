import { type Request, type Response, type NextFunction } from "express"
import User from "../models/user.model"
import jwt from "jsonwebtoken"

const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader) {
            return res.status(401).json({
                message: "No token provided"
            })
        }

        const token = authHeader.split(" ")[1]

        if (!token) {
            return res.status(401).json({
                message: "No token provided"
            })
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as jwt.JwtPayload

        const user = await User.findById(decoded.userId)

        if(!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        (req as any).user = user

        next()
    }
    catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }
}

export default authMiddleware