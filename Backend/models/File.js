const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});

//ye mongoose.model se pahle hi post middleware banana hai***
//jaise hi db me entry create ho uske turant baad ye post middleware run ho jata hai....
fileSchema.post("save",async function(doc){
    //doc is the entry that is stored in your database
    try{
        //transporter
        //shift this config to config folder //your task 
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });
        //send mail 
        let info = await transporter.sendMail({
            from: `Hackers Group Limited`,
            to: doc.email,
            subject: "Congo! Your privacy is being hacked :)]",
            html:`<h2> Your account will be terminated in upcoming 2 days </h2> <p>This is an email info to let u know that your hacked... View here: <a href="${doc.imageUrl}">${doc.imageUrl}</a></p>`,
        })
        console.log(info);
    }
    catch(error){
        console.log(error);
    }
})

const File = mongoose.model("File",fileSchema);
module.exports = File;