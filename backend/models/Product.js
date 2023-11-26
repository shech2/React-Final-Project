import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String },
        img: { type: String, required: true },
        categories: { type: Array, required: true },
        Author: { type: Array, required: true },
        topic: { type: Array, required: true },
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true },

    },
    { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);