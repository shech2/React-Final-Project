import express from 'express'
import { createCart, deleteCart, getCart, getCarts, updateCart } from '../controllers/CartController.js'
const router = express.Router();

//CREATE

router.post("/", createCart);

//UPDATE
router.put("/:id", updateCart);

//DELETE
router.delete("/:id", deleteCart);

//GET USER CART
router.get("/find/:userId", getCart);

// //GET ALL
router.get("/", getCarts);

export default router;