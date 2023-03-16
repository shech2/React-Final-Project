import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        isAdmin: { type: Boolean, default: false },
    }, { timestamps: true });

export default mongoose.model("users", UserSchema);
