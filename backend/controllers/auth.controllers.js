import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const signup = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        const existingUsername = await User.findOne({ username });
        const existingEmail = await User.findOne({ email });

        if (existingUsername) return res.status(400).json({ message: "username already exists" });
        if (existingEmail) return res.status(400).json({ message: "email already exists" });
        if (password.length < 6) return res.status(400).json({ message: "password must be at least 6 characters long" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ name, username, email, password: hashedPassword });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        res.cookie("jwt-linkedin", token, {
            httpOnly: true,                                     // prevent XSS attack
            sameSite: "strict",                                 // prevent CSRF attacks
            secure: process.env.NODE_ENV === "production",     // prevent man-in-the-middle attack
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(201).json({ message: "user created successfully" });

    } catch (error) {
        console.log("error in signup controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "3d" });
        await res.cookie("jwt-linkedin", token, {
            httpOnly: true,                                     // prevent XSS attack
            sameSite: "strict",                                 // prevent CSRF attacks
            secure: process.env.NODE_ENV === "production",     // prevent man-in-the-middle attack
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({ message: "Logged in successfuly " });
    } catch (error) {
        console.log("error in login controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

// login without credentials
export const anonymousLogin = async (req, res) => {
    try {

        res.cookie("loggedin", "true", {
            httpOnly: true,                                     // prevent XSS attack
            sameSite: "strict",                                 // prevent CSRF attacks
            secure: process.env.NODE_ENV === "production",     // prevent man-in-the-middle attack
            maxAge: 24 * 60 * 60 * 1000
        });
        res.status(200).json({ message: "Logged in successfuly " });
    } catch (error) {
        console.log("error in login controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

export const anonymousLogout = async (req, res) => {
    try {

        res.clearCookie("loggedin");
        res.json({ message: "user logged out successfully" });

    } catch (error) {
        console.log("error in login controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt-linkedin");
        res.json({ message: "user logged out successfully" });
    } catch (error) {
        console.log("error in logout controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

export const getCurrentUser = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json(user);
    } catch (error) {
        console.log("error in getCurrentUser controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};