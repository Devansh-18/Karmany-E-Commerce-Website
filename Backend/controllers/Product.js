const Product = require("../models/Product");

exports.getAllProduct = async(req,res)=>{
    try{
        const products = await Product.find()
        res.send(products)
    }catch(error){
        console.error(error.message);
        res.status(500).send('Internal Server Error')
    }
}


exports.showAllProduct = async (req,res)=>{
    try{
        const allProducts = await Product.find({},{productName:true,price:true,productImage:true,ratingAndReviews:true});
        return res.status(200).json({
            success:true,
            message:'All Products fetched Successfully',
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Cannot fetch Products',
            error:error.message,
        })
    }
};

exports.getProductDetails = async (req,res)=>{
    try{
        //get id 
        const {productId} = req.body;
        //find product details 
        const productDetails = await Product.find(
            {_id:productId}
        )
        .populate("category")
        .populate("ratingAndReviews")
        .exec();
        //validation 
        if(!productDetails){
            return res.status(403).json({
                success:false,
                message:`Couldn't find Product with ${productId}`,
            })
        }
        //return res 
        return res.status(200).json({
            success:true,
            message:'Product Details fetched successfully',
            data:productDetails,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//for filtering added by ayushi

exports.getProducts = async(req,res)=>{
    try{
        const queryObj = { ...req.query };
        const excludeFields = ["page", "sort", "limit", "fields"];
        excludeFields.forEach((el) => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
       
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        console.log(JSON.parse(queryStr))
        let query = Product.find(JSON.parse(queryStr));
    
        // Sorting
    
        if (req.query.sort) {
          const sortBy = req.query.sort.split(",").join(" ");
          query = query.sort(sortBy);
        } else {
          query = query.sort("-createdAt");
        }
    
        // limiting the fields
    
        if (req.query.fields) {
          const fields = req.query.fields.split(",").join(" ");
          query = query.select(fields);
        } else {
          query = query.select("-__v");
        }
    
        // pagination
    
        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
          const productCount = await Product.countDocuments();
          if (skip >= productCount) throw new Error("This Page does not exists");
        }
        const product = await query;
        res.json(product);
      } catch (error) {
        throw new Error(error);
      }
}