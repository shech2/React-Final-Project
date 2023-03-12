import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/product.js";
import cors from "cors";

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Backend server is running!\n" + "on port: " + process.env.PORT || 3000 + "\n");
});