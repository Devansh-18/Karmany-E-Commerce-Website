import React from 'react'
import { useState } from 'react';
import style from "../Login/Login.module.css"
import {useNavigate,Link} from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [credentials,setCredentials]=useState({email:"",password:"",firstName:"",lastName:""})
 
  const handleChange = (e)=>{
  
    setCredentials({ ...credentials,[e.target.name]:e.target.value})
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
console.log(credentials.password)
    const response = await fetch("http://localhost:4000/api/v1/auth/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({firstName:credentials.firstName,lastName:credentials.lastName,email:credentials.email,password:credentials.password})
    });

    const json = await response.json();
    console.log(json)
    if(json.success){
      navigate('/login')
    }
  }



  return (
    <>
   <div><div className={style.logincontainer}>
      <p className={style.heading}>Register your Account</p>
        <form  className={style.form}action='' onSubmit={handleSubmit}>
       
          <input type="text" name='firstName' id='firstName' value={credentials.firstName} onChange={handleChange} placeholder="First Name"/>
          <input type="text" name='lastName' id='email' value={credentials.lastName} onChange={handleChange} placeholder="Last Name"/>
       
          <input type="email" name='email' id='email' value={credentials.email} onChange={handleChange} placeholder="Enter your email"/>
          <input placeholder="Password" type="password" name='password' id='password' value={credentials.password} onChange={handleChange}/>
          {/* <input placeholder="Confirm Password" type="password" name='confirmPassword' id='confirmPassword' value={credentials.confirmPassword} onChange={handleChange}/> */}
          <div className={style.submit} >
            <button >Submit</button>
          </div>
          <div>
            <div className={style.white}>Already have an account?</div>
            <Link to="/login" className='blue'> Log In</Link>
          </div>
        </form>
     
    </div></div>
   
    </>
  )
}

export default Register
