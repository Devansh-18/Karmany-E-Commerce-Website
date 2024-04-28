const RatingAndReview = require("../models/RatingAndReview");
const Product = require("../models/Product");

//create rating 
exports.createRating = async (req,res)=>{
    try{
        //get user id
        const userId = req.user.id;
        //get all other data 
        const {rating,review,productId} = req.body;
        //check whether user is enrolled in the course or not 
        //jo enrolled hoga usise rating lenge 
        const productDetails = await Product.findOne(
            {
                _id:productId,
                studentEnrolled: {$elemMatch: {$eq: userId}},
            }
        )
        if(!productDetails){
            return res.status(404).json({
                success:false,
                message:'User not enrolled for the course',
            })
        }
    //check id user already reviewd or not ... we do not allow the same user to review the same cource more than once
        const alreadyReviewed = await RatingAndReview.findOne({
            user:userId,
            course:productId,
        });
        if(alreadyReviewed){
            return res.status(401).json({
                success:false,
                message:'User already reviewed the product',
            })
        }
        //create review 
        const ratingReview = await RatingAndReview.create({
            rating,review,
            course:productId,
            user:userId,
        });
        //update course 
        await Product.findByIdAndUpdate(
            {_id:productId},
            {
                $push:{
                    ratingAndReview: ratingReview._id,
                }
            },
            {new:true},
        )
        //return response 
        return res.status(200).json({
            success:true,
            message:'Review created Successfully',
            ratingReview,
        })
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}


// get average rating
exports.getAverageRating = async (req,res)=>{
    try{
        //get course id 
        const courseId = req.body.courseId;
        //calc average rating 
        const result = await RatingAndReview.aggregate([
            {
                $match:{
                    course: new mongoose.Types.ObjectId(productId),//making object from string
                },
            },
            {
                $group:{
                    _id:null,//we can add filters for how to group items, here we want all se we set null
                    averageRating:{$avg: "$rating"},
                }
            }
        ])//aggregate function array return kr rha hai check krna  
        //return rating 
        if(result.length>0){
            return res.status(200).json({
                success:true,
                averageRating: result[0].averageRating,
            })
        }
        //if no rating review exist 
        return res.status(200).json({
            success:true,
            message:'Average rating is 0, no rating is given till now',
            averageRating:0,
        });
    }
    catch(error){
        console.log(error.message);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//get all ratings and reviews 
exports.getAllRating = async (req,res)=>{
    try{
        const allReviews = await RatingAndReview.find({})   //find all the reviews without any condition 
                                                .sort({rating:"desc"})
                                                .populate({
                                                    path:"user",
                                                    select:"firstName lastName email image",//selecting what we see
                                                })
                                                .populate({
                                                    path:"product",
                                                    select:"productName"
                                                })
                                                .exec();
        return res.status(200).json({
            success:true,
            message:'All reviews fetched successfully',
            data:allReviews,
        });
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}