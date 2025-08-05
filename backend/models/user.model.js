import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    referralCode: {
        type: String,
        required: true,
        unique: true
    },
    totalDonation: {
        type: Number,
        required: true,
        default: 0
    },
    rewards: {
        type: [String],
        required: true,
        default: []
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)