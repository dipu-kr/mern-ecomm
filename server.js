import  express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";

// configure env
dotenv.config();

// database connect
connectDB()

// rest object
const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello world dipu kumar")
})

const PORT =  process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})