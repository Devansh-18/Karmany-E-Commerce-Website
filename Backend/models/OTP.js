const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
    },
    otp:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

async function sendVerificationEmail(email,otp){
    try{
        const mailResponse = await mailSender(email,"Verification mail from Karamny",otp);
        console.log("Email send Successfully",mailResponse);
    }
    catch(error){
        console.log(error);
        throw error;
    }
}
OTPSchema.pre("save",async function(next){
    sendVerificationEmail(this.email,this.otp);
    next();
})

module.exports = mongoose.model("OTP",OTPSchema);