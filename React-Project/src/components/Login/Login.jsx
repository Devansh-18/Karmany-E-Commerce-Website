import React from 'react'
import { useState } from 'react';
import style from "./Login.module.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import User from '../User/User'


const Login = () => {
  const [credentials,setCredentials]=useState({email:"",password:""})
let navigate=useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/v1/auth/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({email:credentials.email,password:credentials.password})
    });

    const json = await response.json();
    console.log(json)


    if(json.success){
      localStorage.setItem('token',json.token)
      localStorage.setItem('fname',json.user.firstName)
      localStorage.setItem('lname',json.user.lastName)
      localStorage.setItem('lname',json.user._id)
      localStorage.setItem('email',json.user.email)
      navigate('/')
      
    }
  }
  const handleChange = (e)=>{
    setCredentials({ ...credentials,[e.target.name]:e.target.value})
  }

  return (
    <>
  <div className={style.logincontainer}>
    <p className={style.heading}>Login to your account</p>
    <div className={style.form} >
      <form action='' onSubmit={handleSubmit}>
        <input type="text" name='email' id='email' value={credentials.email} onChange={handleChange}/>
        <input type="password" name='password' id='password' value={credentials.password} onChange={handleChange}/>
        <div>
            <Link to="/forgotpassword" className='blue'>Forgot Password</Link>
        </div>    
        <div className={style.submit} >
          <button>Submit</button>
        </div>
        <div>
          <div className={style.white}>Don't have an account?</div>
          <Link to="/register" className='blue'> Sign Up</Link>
        </div>
      </form>
    </div>
    <div className={style.decoration} >

    </div>
  </div>
  </>
  )
}

export default Login
