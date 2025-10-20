import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { router } from "./routes/UserRouteDemo.js"; 
dotenv.config();

const server = express();
const port: number | string = process.env.PORT || 5000;

//middlewares
server.use(cors());
server.use(express.json());

server.use('/api',router)


connectDB().then(() => {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
