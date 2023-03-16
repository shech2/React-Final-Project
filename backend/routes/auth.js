import express from "express";
const router = express.Router();
import { createUser, getUser } from "../controllers/authController.js";


router.post("/", createUser);

router.get("/", getUser);

export default router;