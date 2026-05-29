import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true,
    },

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
    },

    avatar: {
        type: String,
        default: "",
    },

    bio: {
        type: String,
        default: "",
    },
    
}, {
    timestamps: true,
})

const User = mongoose.model("User", userSchema)

export default User