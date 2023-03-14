import express from 'express'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/PrController.js'
const router = express.Router();


//CREATE
router.post("/", createProduct);

//UPDATE
router.put("/:id", updateProduct);

//DELETE
router.delete("/:id", deleteProduct);

//GET PRODUCT
router.get("/find/:id", getProduct);

//GET ALL PRODUCTS
router.get("/", getProducts);


export default router;