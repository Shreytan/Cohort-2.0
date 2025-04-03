const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Courses } = require("../db"); // Ensure Courses model is imported

// User Signup
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.headers;
        const user = await User.create({ username, password });

        res.json({ message: `User with ID ${user._id} has been created successfully` });
    } catch (err) { 
        res.status(400).json({ error: "Signup failed", details: err.message });
    }
});

// List All Courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Courses.find({});
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch courses", details: err.message });
    }
});

// Purchase Course
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const courseId = req.params.courseId;
        const { username, password } = req.headers;

        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Ensure courseId is an ObjectId if required
        if (!user.purchasedCourses.includes(courseId)) {
            user.purchasedCourses.push(courseId);
            await user.save();
        }

        res.json({ message: "Purchase complete!" });

    } catch (err) {
        res.status(400).json({ error: "Failed to purchase course", details: err.message });
    }
});

// Get Purchased Courses
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const username = req.headers.username;
        const user = await User.findOne({ username }).populate("purchasedCourses");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ purchasedCourses: user.purchasedCourses });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch purchased courses", details: err.message });
    }
});

module.exports = router;
