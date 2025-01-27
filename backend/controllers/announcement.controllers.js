import Announcement from "../models/announcement.model.js";

export const getAllAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.find();
        res.status(200).json(announcements);
    } catch (error) {
        console.log("error in getAllAnnouncements controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

// Create a new quiz
export const createAnnouncement = async (req, res) => {
    try {
        const { course, description } = req.body;
        const announcement = new Announcement({ course, description });

        await announcement.save();
        res.status(201).json(announcement);
    } catch (error) {
        console.log("error in createAnnouncement controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

// Update a quiz
export const updateAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findById(req.params.id);

        if (!announcement) return res.status(404).json({ message: "announcement not found" });

        const allowedFields = ["course", "description"];

        const updatedData = {};

        allowedFields.forEach(field => {
            if (req.body[field]) updatedData[field] = req.body[field];
        });

        announcement.set(updatedData);

        await announcement.save();

        res.status(200).json(announcement);
    } catch (error) {
        console.log("error in updateAnnouncement controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

// Delete a quiz
export const deleteAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findByIdAndDelete(req.params.id);

        if (!announcement) return res.status(404).json({ message: "announcement not found" });

        res.status(200).json({ message: 'announcement deleted successfully' });
    } catch (error) {
        console.log("error in deleteAnnouncement controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};