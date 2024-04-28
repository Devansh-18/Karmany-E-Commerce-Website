import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='about-us'>
      <div className='motive p-12'>
        <div className='Heading'>Namecom</div>
        <div className='center padding'>Namecom is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items.</div>
      </div>
    </div>
    <hr></hr>
      <div className='lower-part'>
        <div style={{"background":"black"}} className=' grid center'>
            <p>Terms & conditons</p>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Returns</p>
            <p>Terms of use</p>
            <p>FAQs</p>

            <p>Shipping Policy</p>
            <p>Cancellation policy</p>
            <p>privacy Policy</p>

        </div>
        <p className='center' style={{"padding":"18px","font-size":"18px"}}>© 2024 Namecom Limited All Rights Reserved.</p>
        </div>  
   
    </>
  )
}

export default Footer
