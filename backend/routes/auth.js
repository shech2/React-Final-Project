import express from "express";
const router = express.Router();
import { createUser, getUser } from "../controllers/authController.js";


router.post("/", createUser);

router.get("/:id", getUser);

export default router;