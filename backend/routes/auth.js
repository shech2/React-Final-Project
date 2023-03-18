import express from "express";
const router = express.Router();
import { createUser, getUser , getStats , getAllUsers } from "../controllers/authController.js";


router.post("/", createUser);

router.get("/:id", getUser);

router.get("/stats", getStats);

router.get("/", getAllUsers);

export default router;