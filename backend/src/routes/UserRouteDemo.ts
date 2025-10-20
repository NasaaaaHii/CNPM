import express from "express"
import { userController } from "../controllers/userControllers.js";
export const router = express.Router();

router.post("/user",userController);