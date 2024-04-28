const User = require("../models/User");
const Cart = require("../models/Cart")
const Product = require("../models/Product")



exports.addToCart=async(req,res)=>{
 
    const user = req.params.id;
    const {productId,quantity}=req.body;
    console.log(productId)

    try{
        let cart = await Cart.findOne({user})
        let item = await Product.findOne({_id:productId})

        if(!item){
            res.status(404).send('Item Not Found!')
        }

        const price = item.sp;
        const name = item.title;

        if(cart){
            let itemIndex = cart.items.findIndex(p=>p.productId==productId);
            if(itemIndex >-1){
                let productItem = cart.items[itemIndex]
                productItem.quantity+=quantity;
                cart.item[itemIndex]=productItem;

            }
            else{
                cart.items.push({productId,name,quantity,price});
            }
            cart.bill+=quantity*price;
            cart =await cart.save();
            return res.status(201).send(cart);
        }
        else{
            const newCart=await Cart.create({
                user,
                items:[{productId,name,quantity,price}],
                bill:quantity*price,
            });
            return res.status(201).send(newCart)
        }
    }
    catch(error){
console.log(error)
    }
}