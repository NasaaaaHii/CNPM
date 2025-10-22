import express from "express"
import User from "../models/user.model.js"

const router = express.Router()

router.post("/create", async (req,res) => {
    try {
        const {name,email,password} = req.body;
        const user = await User.create({name,email,password});
        res.json(user)
    } catch(err: any) {
        res.status(500).json({message: err.message})
    }
});

router.get("/", async (req,res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch(err: any) {
        res.status(500).json({message: err.message})
    }
})

export default router;