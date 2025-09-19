import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import type { Application, Request, Response } from "express";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
