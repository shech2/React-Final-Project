import express from 'express'
import { createOrder, deleteOrder, getIncome, getOrder, getOrders, updateOrder } from '../controllers/OrderController.js'
const router = express.Router();

//CREATE

router.post("/", createOrder);

//UPDATE
router.put("/:id", updateOrder);

//DELETE
router.delete("/:id", deleteOrder);

//GET USER ORDERS
router.get("/find/:userId", getOrder);

// //GET ALL

router.get("/", getOrders);

// GET MONTHLY INCOME

router.get("/income", getIncome);

export default router;