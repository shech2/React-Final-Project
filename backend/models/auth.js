import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        uid: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        isAdmin: { type: Boolean, default: false },
        img: { type: String },
    }, { timestamps: true });

export default mongoose.model("users", UserSchema);
