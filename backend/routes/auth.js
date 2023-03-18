import express from "express";
const router = express.Router();
import { createUser, getUser , getStats , getAllUsers , deleteUser , updateUser } from "../controllers/authController.js";


router.post("/", createUser);

router.get("/:id", getUser);

router.get("/stats", getStats);

router.get("/", getAllUsers);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);

export default router;