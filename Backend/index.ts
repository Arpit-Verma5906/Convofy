import express, { type Request, type Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import authRoutes from "./routes/auth.routes"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)

const PORT = Number(process.env.PORT) || 5000

app.get('/', (req: Request, res: Response) => {
    res.send("Backend Running")
})

mongoose.connect(process.env.MONGO_URI!)
.then(() => {
    console.log("Database Connected Successfully")
    
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})