import React from 'react'
import { useEffect } from 'react'
import {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../User/User.css'
import user from "../../assets/svg/user.svg"
// import arrow from "../../assets/svg/arrow.svg"
import file from "../../assets/svg/file.svg" 
import account from "../../assets/svg/user-icon.svg"
import logout from "../../assets/svg/logout.svg"
import payment from "../../assets/svg/payment.svg"
import stuff from "../../assets/svg/stuff.svg" 


function User(props) {

    let firstName=localStorage.getItem('fname')
    let lastName=localStorage.getItem('lname')
    let email =localStorage.getItem('email')
    // const host = "http://localhost:5050"
    // const userInitial = []
    // const [data, setData] = useState(userInitial)
  
    // //GET ALL NOTES
    // const getData = async () => {
    //   //API CALL
    //   const response = await fetch(`${host}/api/shico/user/login`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   const json = await response.json()
  
    //   setData(json)
    // }
  
    //   let navigate=useNavigate();
      
  
      
  
    //   async function handleClick(){
    //       const host = "http://localhost:5050"
        
    //       //GET ALL NOTES
    //       const logout = async () => {
    //         //API CALL
    //         const response = await fetch(`${host}/api/shico/user/logout`, {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //           },
    //         });
    //         const json = await response.json()
        
    //         setData(json)
    //       }
    //   }
      // useEffect(() => {
      //   if(localStorage.getItem('token')){
      //     getData()
      //     console.log(data)
      //   }
      //   else{
      //     navigate('/login')
      //   }
        
      //   // eslint-disable-next-line
      // }, [])  
      // console.log(data);
  
    return (
      <>
          <div className="user-container">
          <div className="user-left-container">
              
              <div className="user-section">
                  <div className="content">
                      <img src={file} alt=""/>
                      <h5>MY ORDERS</h5>
                      {/* <img src={arrow} className="arrow" alt=""/> */}
                  </div>
  
                  <div className="not-flex">
                  <div className="content">
                      <img src={account} alt=""/>
                      <h5>ACCOUNT SETTINGS</h5>
                      
                  </div>
                  <div className="down-content">
                      <h5>Profile Information</h5>
                      <h5>Manage Addresses</h5>
                  </div>
              </div>
  
                  <div className="content">
                      <img src={payment} alt=""/>
                      <h5>PAYMENTS</h5>
                  </div>
                  <div className="down-content">
                      <h5>Gift Card</h5>
            
                      <h5>Saved Card</h5>
                  </div>

                  <div className="content">
                      <img src={stuff} alt=""/>
                      <h5>MY STUFF</h5>
                  </div>
                  <div className="down-content">
                      <h5>My Wishlist</h5>
                      <h5>My Reviews & Ratings</h5>
                      <h5>My Collections</h5>
                     
                  </div>
  
                  <div className="content down-content" style={{'width':"100%","text-align":'left'}} >
                      <img src={logout} alt=""/>
                      <h5>Logout</h5>
                  </div>
              </div>
          </div>
          <div className="right-container">
              <div className="main-heading">
                <div className="flex-row">
                  <div>
                <div className="upper-heading">
                      <h4 className='bold-black'>First name</h4>
                      <h5>Edit</h5>
                  </div>
                  <input style={{"cursor":"not-allowed"}} type="text" placeholder={firstName}/>
                  </div>
                  <div>
                  <div className="upper-heading">
                      <h4 className='bold-black'>Last name</h4>
                      <h5>Edit</h5>
                  </div>
                  <input style={{"cursor":"not-allowed"}}  type="text" placeholder={lastName}/>
                  </div>
                  </div>
              </div>

            <div className='flex-row'>
              <div className="main-heading">
                  <div className="upper-heading">
                      <h4 className='bold-black'>Email Address</h4>
                      <h5>Edit</h5>
                  </div>
                  <input style={{"cursor":"not-allowed"}}  type="email" placeholder={email}/>
              </div>

            
              </div>
              <div className="main-heading">
                  <div className="upper-heading">
                      <h4 className='bold-black'>Address</h4>
                      <h5>Edit</h5>
                  </div>
                  <input type="text" className='address-input'/>
              </div>
  
          </div>
      </div>
      </>
    )
  }
  
  export default User
