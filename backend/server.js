import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./lib/db.js";
import authRoute from "./routes/auth.routes.js";
import userRoute from "./routes/user.routes.js";
import quizRoute from "./routes/quiz.routes.js";
import announcementRoute from "./routes/announcement.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/quiz", quizRoute);
app.use("/api/announcement", announcementRoute);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});