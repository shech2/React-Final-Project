import express from "express";
const router = express.Router();
import { createUser, getUser , getStats } from "../controllers/authController.js";


router.post("/", createUser);

router.get("/:id?", getUser);

router.get("/stats", getStats);

export default router;