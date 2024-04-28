const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

//localFileUpload ->handler function 

exports.localFileUpload = async (req,res)=>{
    try{
        //fetch files 
        const file = req.files.file; //this is the way to fetch files //file is the key of postman
        console.log("Files-> ",file);
        //path of server where file is going to be stored 
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;//file ka extension ke liye last thing ki hai 
        console.log("Path-> ",path);

        file.mv(path, (err)=>{
            console.log(err);
        });
        res.json({
            success:true,
            message:'Local File Uploaded Successfully',
        });
    }
    catch(err){
        console.log(err);
    }
}

//image upload in cloudinary

function isFileTypeSupported(type,supportedTypes){
    return supportedTypes.includes(type); //checks whether element type is present in array of supportedTypes 
}

async function uploadFileToCloudinary(file,folder,quality){
    const options = {folder};
    options.resource_type = "auto";//auto detect the type of file 

    if(quality){
        options.quality = quality;
    }
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload = async (req,res)=>{
    try{
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File Format not supported',
            })
        }
        //for supported file format 
        const response = await uploadFileToCloudinary(file,'backendClasses');
        console.log(response);

        //db entry create ... 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })
        res.json({
            success:true,
            message:'Image uploaded Successfully',
        });


    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}

//video Upload
exports.videoUpload = async (req,res)=>{
    try{
        const {name,tags,email} = req.body;
        console.log(name,tags,email);
        const file = req.files.videoFile;
        const supportedTypes = ["mp4","mov"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }
         //for supported file format 
         const response = await uploadFileToCloudinary(file,'backendClasses');
         console.log(response);
 
         //db entry create ... 
         const fileData = await File.create({
             name,
             tags,
             email,
             imageUrl:response.secure_url,
         })
         res.json({
             success:true,
             message:'Video uploaded Successfully',
         });

    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}

//nhi ho rhaaaaaaaaa*****************************
//reducedImageUpload
//either by reducing quality or height and width //ye khud kr lena doosra wala 
exports.reducedImageUpload = async (req,res)=>{
    try{
        //data fetch
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes = ["jpg","jpeg","png","avif","webp"];
        const fileType = file.name.split(".")[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File Format not supported',
            })
        }
        //for supported file format 
        //reduce size by reducing quality
        const response = await uploadFileToCloudinary(file,'backendClasses',90);
        console.log(response);

        //db entry create ... 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })
        res.json({
            success:true,
            message:'Reduced Image uploaded Successfully',
        });


    }
    catch(error){
        console.log(error);
        res.status(400).json({
            success:false,
            message:'Something went wrong',
        })
    }
}
