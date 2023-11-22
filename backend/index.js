import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import stripeRoute from "./routes/stripe.js";
import usersRoute from "./routes/auth.js";
import cors from "cors";
import ws from './WebSocket/ws.js';
import http from 'http';

dotenv.config();

const server = http.createServer(app);

server.listen(5002, () => {
    console.log("Websocket server is running!\n" + "on port: " + 5002 + "\n");
});

ws.attach(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
app.use("/api/users", usersRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log("Backend server is running!\n" + "on port: " + process.env.PORT || 5000 + "\n");
});