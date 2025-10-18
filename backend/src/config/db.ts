import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {
        const uri = process.env.MONGO_URI as string;
        if(!uri) {
            throw new Error("MONGO_URI not found in .env")
        }

        await mongoose.connect(uri)
        console.log("Connect mongodb successfully")
    } catch(err) {
        console.log("connect mongodb failed", err)
        process.exit(1)
    }
}