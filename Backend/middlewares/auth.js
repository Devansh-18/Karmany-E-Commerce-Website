const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

//auth
exports.auth = async (req,res,next)=>{
    try{
        //extract token 
        const token = req.cookies.token || req.header("Authorisation").replace("Bearer ","") || req.body.token;
        //if token is not present 
        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token is missing',
            });
        }
        //verify token 
        try{
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode
        }
        catch(error){
            //verification issue 
            return res.status(401).json({
                success:false,
                message:'Token is Invalid',
            });
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:'Something went wrong in validating token',
        })
    }
}