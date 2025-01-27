import express from "express";
import {
    getAllQuizzes,
    createQuiz,
    updateQuiz,
    deleteQuiz
} from "../controllers/quiz.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { validateObjectId } from "../lib/idValidation.js";

const router = express.Router();

// All thies routes should be protected by the protectRoute middleware but for the task purpose i will not use it
// and for the quize routes i should check if the user has the role "admin" to delete or update the quize

router.get('/', getAllQuizzes);
router.post('/', createQuiz);
router.put('/:id', validateObjectId, updateQuiz);
router.delete('/:id', validateObjectId, deleteQuiz);

export default router;