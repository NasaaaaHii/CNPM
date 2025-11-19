import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import supabase from "./config/supabaseClient.js";
import authRoutes from "./modules/auth/auth.routes.js";
import overviewRoutes from "./modules/overview/overview.route.js";

dotenv.config();

const server = express();
const port: number | string = process.env.PORT || 5000;

//middlewares
server.use(cors());
server.use(express.json());

// Routes
server.use("/api/auth", authRoutes);
server.use("/api",overviewRoutes)

// Health check endpoint
server.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

async function testConnect() {
  const { data, error } = await supabase.from("type_account").select("*");

  if (error) {
    console.error("ket noi that bai", error.message);
  } else {
    console.log("ket noi thanh cong");
    console.log("data: ", data);
  }
}

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  testConnect();
});
