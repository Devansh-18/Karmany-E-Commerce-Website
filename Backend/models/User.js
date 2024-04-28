const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cart:[
        // {
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"Product",
        // }
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"}
    ],
    token:{
        type:String,
    },
    resetPasswordExpires:{
        type: Date,
    },
})
module.exports = mongoose.model("User", userSchema);