import  express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"
import cors from 'cors'

// configure env
dotenv.config();

// database connect
connectDB()

// rest object
const app = express()

// middleware
app.use(cors())
app.use(express.json())


app.use('/api/v1/auth',authRoutes)

app.get("/",(req,res)=>{
    res.send("hello world dipu kumar")
})

const PORT =  process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})