const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    description:{
        type:String,
        trim:true,
    },
    product:[
        {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Product",
        }
    ],
});

module.exports = mongoose.model("Category",categorySchema);