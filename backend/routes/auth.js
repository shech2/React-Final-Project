import express from "express";
const router = express.Router();
import { createUser, getUser  , getAllUsers , deleteUser , updateUser } from "../controllers/authController.js";


router.post("/", createUser);

router.get("/:id", getUser);

router.get("/", getAllUsers);

router.delete("/:uid", deleteUser);

router.put("/:uid", updateUser);

export default router;