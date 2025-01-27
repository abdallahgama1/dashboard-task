import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: { type: String },
    
    role: { 
        type: String, 
        required: true,
        enum: ["student", "teacher" ,"admin"],
        default: "student"
    },
}, 
{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;