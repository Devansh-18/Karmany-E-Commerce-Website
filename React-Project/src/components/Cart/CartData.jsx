import React from 'react'
import './Cart.css'
import './CartList.css'
import CartList from './CartList'

function CartData() {
  return (
    <>
    <div className="top flex-content">
        <div className="cart-left">

        <CartList/>
        <CartList/>
        <CartList/>
        <CartList/>
        </div>
        <div className="cart-right price-container">
            <p className="">Price Details</p>
            <hr></hr>
            <div className="price-details">
                <div className="price-row">Price</div>
                <div className="price">₹5,795</div>
            </div>
            <div className="price-details">
                <div className="price-row">Discount</div>
                <div className="price">− ₹3,639</div>
            </div>
            <div className="price-details">
                <div className="price-row">Coupons for you</div>
                <div className="price">− ₹21</div>
            </div>
            <div className="price-details">
                <div className="price-row">Delivery Charges</div>
                <div className="price">Free</div>
            </div>
            <hr></hr>
            <div className="price-details">
                <div className="amount bold">Total Amount</div> 
                <div className="price-total bold">₹2,135</div>
                </div>
           <hr></hr>
           <div className="green bold">You will save ₹3,660 on this order</div>
           <button className="">Place Order</button>
        </div>
       
    </div>
 
    </>
  )
}

export default CartData