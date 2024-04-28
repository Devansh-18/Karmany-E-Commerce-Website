const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    //ayushi modifed it
    mp:{
        type:Number,
        required:true,
    },
    sp:{
        type:Number,
        required:true,
    },
    profit:{
        type:Number,
        required:true,
    },
    category:{
       type:String,
       required:true
    },
    noOfSales:{
        type:Number,
    },
    imgSrc:{
        type:String,
        required:true,
    },
    productDescription:{
        type:String,
        required:true,
        trim:true,
    },
    ratingAndReviews:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ReviewAndRating",
    },
});

module.exports = mongoose.model("Product",productSchema);