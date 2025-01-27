import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    // auther: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    courseName: { type: String, required: true },
    topic: { type: String, required: true },
    startDate: { type: String, required: true },
},
    { timestamps: true }
);

const Quize = mongoose.model("Quize", quizSchema);

export default Quize;