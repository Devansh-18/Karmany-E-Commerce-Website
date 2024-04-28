import React from 'react'
import img from '../../assets/images/card-img.avif'
import './CartList.css'

function CartList() {
  return (
    <>
    <div className="cart-container flex-content">
   
        <img className="product-img cart-img-list" src={img} />
        <div className="cart-right">
        <div className="cart-title">Men Solid Black T-Shirt</div>
        <div className="price">₹279</div>
        <div className="flex-content m-0">

        <div className="remove login">Remove</div>
        <div className="remove login">Buy This</div>
            
        </div>
        </div>
        

    </div>
  
    </>
  )
}

export default CartList