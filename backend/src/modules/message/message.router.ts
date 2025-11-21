import { Router } from "express";
import { MessageController, sendMessageToAdminByIdParent } from "./message.controller.js";

const router = Router()

router.get("/message", MessageController.getMessageByIdParent)
router.post("/messagee", sendMessageToAdminByIdParent)

export default router;