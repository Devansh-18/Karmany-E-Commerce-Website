import React ,{useState} from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'
import Cart from '../Cart/CartList'
// import img from '../../assets/images/card-img.avif'


function ProductCard(props) {
  let {id,title,mp,sp,profit,img}=props;
  let user_id=localStorage.getItem('id')

  const [carts,setCarts]=useState(null)

  const handleClick=async(req,res)=>{
    const response = await fetch(`http://localhost:4000/api/v1/cart/signup/${user_id}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({productId:"662d1d9aab19f07a090ad20c",quantity:"1"})
    });

    const json = await response.json();
    console.log(json)
    if(json.success){
      setCarts(json.items)
      
    }
  }
  return (
    <>
    {carts!==null? carts.map((cart)=>{
      return <Cart title={cart.title} />
    }):  <div className='card-grid'>
            <div className='image-container'>
      
                <img className='product-image' src={img} alt='the product image'></img>
            </div>
            <div className='content-footer'>
            <div className='name'>{title}</div>
          
          
            <div className='flex m-16'>
            <div className='sp'>₹{sp}</div>
            <div className='mp'>₹{mp}</div>
                <div className='profit'>{profit}%</div>
            </div>
            <div className='flex-content'>
            <div className='addcart' onClick={handleClick}>ADD TO CART</div>
            <Link to=''><div className='addcart'>BUY NOW</div></Link>
            </div>
            </div>
        </div>}
      
    </>
  )
}

export default ProductCard
