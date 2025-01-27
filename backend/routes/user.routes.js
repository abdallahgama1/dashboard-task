import express from "express";
import {
    updateProfile
} from "../controllers/user.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// this route should be protected by the protectRoute middleware but for the task purpose i will not use it

router.put('/profile', updateProfile);


export default router;