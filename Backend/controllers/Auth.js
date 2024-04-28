const User = require("../models/User");
const OTP = require("../models/OTP");
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken')
const otpGenerator = require("otp-generator")
const Cart = require("../models/Cart")
const Product = require("../models/Product")


//send otp for Verification 

exports.sendOTP = async (req,res)=>{
    try{
        const {email} = req.body;
        if(!email){
            return res.status(401).json({
                success:false,
                message:'Email is invalid',
            });
        }
        if(await User.findOne({email:email})){
            return res.status(401).json({
                success:false,
                message:'User already exist',
            });
        }
        //generate otp 
        var otp = otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            loweerCaseAlphabets:false,
            specialChars:false,
        });
        let result = OTP.findOne({otp:otp});
        while(result){
            otp = otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result = OTP.findOne({otp:otp});
        }
        //creating entry in db 
        const otpPayload = {email,otp};
        const otpCreate = await OTP.create(otpPayload);
        console.log(otpCreate);
        return res.status(200).json({
            success:true,
            message:'Otp send Successfully',
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Error while sending OTP',
        })
    }
}

//signup 
// exports.signUp = async (req,res)=>{
//     try{
//         const {email,password,confirmPassword,firstName,lastName,otp}=req.body;
//         if(!email||!password||!confirmPassword||!firstName||!lastName||!otp){
//             return res.status(403).json({
//                 success:false,
//                 message:'Enter all signUp details carefully',
//             });
//         }
//         if(password !== confirmPassword){
//             return res.status(403).json({
//                 success:false,
//                 message:'Password and Confirm Password not match',
//             });
//         }
//         const recentOtp = await OTP.findOne({otp:otp}).sort({created:-1}).limit(1);
//         console.log(recentOtp);
//         if(recentOtp.length == 0 || otp!== recentOtp){
//             return res.status(403).json({
//                 success:false,
//                 message:'Otp not match',
//             });
//         }
//         const hashedPassword = await bcrypt.hash(password,10);
//         const user = await User.create({
//             firstName,lastName,email,
//             password:hashedPassword,
//         });
//         return res.status(200).json({
//             success:true,
//             message:'User Entry Created Successfully',
//         });
//     }
//     catch(error){
//         return res.status(500).json({
//             success:false,
//             message:error.message,
//         });
//     }

// }

//ayushi modified it for registering

exports.signUp = async(req,res)=>{
    let success=false;
    try{
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({success,error:"Email ALready exists"})
        }

        const secPass = await bcrypt.hash(req.body.password,10);
        user=await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:secPass,

        })

        const data={
            user:{
                id:user.id
            }
        }

        success=true;
       
        res.json({success,"message":"user created successfully"});
    }catch(error){
        console.log(error)
        res.status(404).send(success,'Internal Server Error')
    }

}


//login

exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email||!password){
            return res.status(500).json({
                success:false,
                message:'Fill details carefully',
            });
        }
        var user = await User.findOne({email:email});
        if(!user){
            return res.status(404).json({
                success:false,
                message:'User Not Found',
            });
        }
        const payload = {
            id:user._id,
            email:user.email,
        }
        if(await bcrypt.compare(password,user.password)){
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h",
            });
            user = user.toObject();
            user.token = token;
            user.password = undefined;
            const options = {
                expiresIn: new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:'Logged in Successfully',
            });
        }
        else{
            return res.status(403).json({
                success:false,
                message:'Please login with correct credentials',
            })
        }
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

