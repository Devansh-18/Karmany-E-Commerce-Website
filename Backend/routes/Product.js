const express = require("express");
const router = express.Router();

const {getAllProduct,showAllProduct,getProductDetails,getProducts} = require("../controllers/Product");

router.post("/getAllProducts",getAllProduct)
router.get("/",getProducts)
router.post("/showAllProduct",showAllProduct);
router.post("/getProductDetails",getProductDetails);



module.exports = router;