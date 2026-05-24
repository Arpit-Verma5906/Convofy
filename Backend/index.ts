import express, {type Request, type Response} from "express"
import cors from "cors"
import dotenv from "dotenv"

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})