import React from 'react'
import emptycartimg from '../../assets/svg/emptycart.svg'
import { Link } from 'react-router-dom'
import './Cart.css'
import CartData from './CartData'

function Cart() {
  return (
    <>
    {localStorage.getItem('token')? <CartData/>: <div className="height top bg-white">
        <img className="product-img cart-img" src={emptycartimg} />
        <p className="bold">Your Cart Is Empty</p>
        <p className="" style={{"height":"28px"}}>Login to see the items you added previously
 </p>
        <Link to='/login' className="login">Login</Link>
    </div>
   }
   
    
    </>
  )
}

export default Cart