const Category = require("../models/Category");

//get all category  
exports.showAllCategory = async(req,res)=>{
    try{
        const allCategory = await Category.find({}, {name:true, description:true}).populate("subCategory");//saare tag de do without any specific logic but ensure that something is written in tag and description 
        return res.status(200).json({
            success:false,
            message:'All category are fetched',
            allCategory,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:'Error while getting all Category',
        });
    }
}

//get category page details 

exports.categoryPageDetails = async(req,res)=>{
    try{
        //get category id  
        const {categoryId} = req.body;
        //get courses for specified category 
        const selectedCategory = await Category.findById(categoryId)
                                               .populate("product")
                                               .exec();
        //validation 
        if(!selectedCategory){
            return res.status(404).json({
                success:false,
                message:'Data not found',
            });
        }
        //get data for different category 
        const differentCategory = await Category.find({
            _id:{$ne: categoryId},//id not equal to category id 
        }).populate("product").exec();

        return res.status(200).json({
            success:true,
            data:{
                selectedCategory,
                differentCategory,
            }
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        });
    }
}