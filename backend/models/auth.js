import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        uid: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        isAdmin: { type: Boolean, default: false },
    }, { timestamps: true });

export default mongoose.model("users", UserSchema);
