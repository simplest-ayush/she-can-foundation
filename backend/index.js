import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/index.js'
import signupRoutes from './routes/user.route.js'
import { User } from './models/user.model.js'

const app = express()

dotenv.config({
    path: '../.env'
})
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())

const PORT = process.env.PORT || 8000


connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERR", error)
        })
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running at port : ${PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connections failed : ", err)
    })


app.get("/api/user/:referral", async (req, res) => {
    const ref = req.params.referral;
    try {
        const user = await User.findOne({ referralCode: ref });
        if (!user) return res.status(404).json({ message: "User not found." });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

app.get("/api/leaderboard", async (req, res) => {
    try {
        // Fetch users from MongoDB, projecting only relevant fields
        const leaderboard = await User.find({}, { name: 1, referralCode: 1, totalDonations: 1, _id: 0 })
            .sort({ totalDonations: -1 });

        res.json(leaderboard);
    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        res.status(500).json({ message: "Failed to fetch leaderboard" });
    }
});
app.use('/api', signupRoutes)