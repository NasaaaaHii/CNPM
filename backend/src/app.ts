import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
dotenv.config()

export const app = express()
app.use(cors())
app.use(express.json())

connectDB()

