const express = require("express");
const router = express.Router();

const {localFileUpload,imageUpload,videoUpload,reducedImageUpload} = require("../controllers/fileUpload");
router.post('/localFileUpload',localFileUpload);
router.post('/imageUpload',imageUpload);
router.post('/videoUpload',videoUpload);
router.post('/reducedImageUpload',reducedImageUpload);

module.exports = router;