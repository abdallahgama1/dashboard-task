import express from "express";
import {
    getAllAnnouncements,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
} from "../controllers/announcement.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { validateObjectId } from "../lib/idValidation.js";

const router = express.Router();

// All thies routes should be protected by the protectRoute middleware but for the task purpose i will not use it
// and for the announcement routes i should check if the user has the role "admin" to delete or update the announcement

router.get('/', getAllAnnouncements);
router.post('/', createAnnouncement);
router.put('/:id', validateObjectId, updateAnnouncement);
router.delete('/:id', validateObjectId, deleteAnnouncement);

export default router;
