import express from "express";
import { 
    // getCurrentUser, 
    signup, 
    login, 
    logout, 
    anonymousLogin, 
    anonymousLogout 
} from "../controllers/auth.controllers.js";

const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/anonymous-login", anonymousLogin);
router.post("/anonymous-logout", anonymousLogout);

export default router;