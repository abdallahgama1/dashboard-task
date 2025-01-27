import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
    course: { type: String, required: true },
    // auther: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true },
},
    { timestamps: true }
);

const Announcement = mongoose.model("Announcement", announcementSchema);

export default Announcement;