import React, { useState } from 'react';
import "./login.css";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
// import { userStore } from 'zustand';
// import { Loader } from 'lucide-react';
import { userStore } from '../stores/userStore';

const Login = () => {
  // const [email,setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const loading = true;
  const[formdata, setFormData]= useState({
    email: "",
    password:"",
  })
    const [ showPassword, setShowPassword ] = useState(false);
    const {login} =userStore();
    const handleSubmit = (e)=>{
      e.preventDefault();
      login(formdata);
    };
  
  
    return (
      <div className="login-main">
        <div className="login-left">
          <img src={Image} alt="background.jpg"
          />
        </div>
        <div className="login-right">
          <div className="login-right-container">
            <div className="login-logo">
              <img src={Logo} alt="logo.png" />
            </div>
            <div className="login-center">
              <h2>Welcome back!</h2>
              <p>Please enter your details</p>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <input type="email" placeholder="Email" 
                onChange={(e)=> setFormData({...formdata,email: e.target.value})}/>

                <div className="pass-input-div">
                  <input type={showPassword ? "text" : "password"} placeholder="Password"
                   onChange={(e)=> {console.log(e.target.value);setFormData({...formdata,password: e.target.value})}} />
                  {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                  
                </div>
  
                <div className="login-center-options">
                  <div className="remember-div">
                    <input type="checkbox" id="remember-checkbox" />
                    <label htmlFor="remember-checkbox">
                      Remember for 30 days
                    </label>
                  </div>
                  <a href="#" className="forgot-pass-link">
                    Forgot password?
                  </a>
                </div>
                <div className="login-center-buttons">
                  <button type="submit">Log In</button>
                  <button type="button">
                    <img src={GoogleSvg} alt="google.svg" />
                    Log In with Google
                  </button>
                </div>
              </form>
            </div>
  
            {/* <p className="login-bottom-p">
              Don't have an account? <a href="#">Sign Up</a> */}
            {/* </p> */}
          </div>
        </div>
      </div>
    );
  };
  


export default Login;


