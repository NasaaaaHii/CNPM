import mongoose  from "mongoose";

const UserDemo = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase:true
    },
    sdt: {
        type: String
    },
    email: {
        type: String,
        lowercase: true
    }
})

export default mongoose.model('UserDemo', UserDemo);