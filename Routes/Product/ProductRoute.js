const express = require("express");
const router = express.Router();

const authenticate = require("../../Middleware/Authenticate");

const createProduct = require("../../Controller/Products/AddProduct");
const deleteproduct = require("../../Controller/Products/DeleteProduct")
const updateproduct = require("../../Controller/Products/EditProduct");
const getAllProducts = require("../../Controller/Products/GetAllProducts");
const findProductById = require("../../Controller/Products/ProductById");

router.get("/",authenticate,getAllProducts);
router.post("/",authenticate,createProduct);
router.delete("/:id",authenticate,deleteproduct);
router.put("/:id",authenticate,updateproduct);
router.get("/id/:id",findProductById);

module.exports=router;