import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import connectDB from "./config/db.js"
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/ProductRoutes.js'
import cors from "cors"
import path from "path"

const app=express()

dotenv.config()

connectDB()


app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use('/api/v1/auth',authRoutes)
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/product", productRoutes)


app.get("/", (req, res) => {
    res.send("<h1>WELCOME TO ITEM CATALOG</h1>");
  });

  
app.listen(process.env.PORT,()=>{
    console.log(`sever is working on http://localhost:${process.env.PORT}`)
})