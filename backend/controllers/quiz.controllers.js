import Quiz from "../models/quiz.model.js";

export const getAllQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.status(200).json(quizzes);
    } catch (error) {
        console.log("error in getAllQuizzes controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

// Create a new quiz
export const createQuiz = async (req, res) => {
    try {
        const { title, courseName, topic, startDate } = req.body;
        const quiz = new Quiz({ title, courseName, topic, startDate });
        await quiz.save();
        res.status(201).json(quiz);
    } catch (error) {
        console.log("error in createQuiz controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

// Update a quiz
export const updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);

        if (!quiz) return res.status(404).json({ message: "Quiz not found" });

        const allowedFields = ["title", "courseName", "topic", "startDate"];

        const updatedData = {};

        allowedFields.forEach(field => {
            if (req.body[field]) updatedData[field] = req.body[field];
        });

        quiz.set(updatedData);

        await quiz.save();

        res.status(200).json(quiz);
    } catch (error) {
        console.log("error in updateQuiz controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};

// Delete a quiz
export const deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);

        if (!quiz) return res.status(404).json({ message: "Quiz not found" });

        res.status(200).json({ message: 'Quiz deleted successfully' });
    } catch (error) {
        console.log("error in deleteQuiz controller ", error.message);
        res.status(500).json({ message: " internal server error " });
    }
};