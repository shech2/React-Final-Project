import express from "express";
const router = express.Router();
import checkout from "../controllers/CheckoutController.js";

router.post("/payment", checkout);

export default router;