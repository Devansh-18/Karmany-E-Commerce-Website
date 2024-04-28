const express = require("express");
const router = express.Router();
const {addToCart} = require('../controllers/cartCtrl')

router.post('/:id',addToCart)
module.exports = router;