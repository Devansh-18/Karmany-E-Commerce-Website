import React from 'react'
import { useState } from 'react';
import style from "../Login/Login.module.css"
import {useNavigate} from 'react-router-dom'

const otp = () => {
  const navigate=useNavigate();
  const [otp, setOtp] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/v1/auth/",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({firstName:credentials.firstName,lastName:credentials.lastName,otp:credentials.otp,password:credentials.password,confirmPassword:credentials.confirmPassword})
    });

    const json = await response.json();
    console.log(json)
    if(json.success){
      navigate('/')
    }
  }
  const handleChange = (e)=>{
    setOtp(e.target.value);
    
  }

  return (
    <div className={style.logincontainer}>
      <div className={style.form} >
        <form action='' onSubmit={handleSubmit}>
          <input type="number" name='otp' id='otp' value={otp} onChange={handleChange} placeholder="Enter OTP "/>
          <button type="button">Submit</button>
         
          
        </form>
      </div>
      <div className={style.decoration} >

      </div>
    </div>
  )
}

export default otp
