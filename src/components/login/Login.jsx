import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './Login.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.svg'
import google from '../../assets/Google.png'
import facebook from '../../assets/Facebook2.png'
import twiiter from '../../assets/Twitter2.png'
import {BsFillEyeFill} from 'react-icons/bs'
import {BsFillEyeSlashFill} from 'react-icons/bs'
const Login = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);
// Generate JSX code for error message
const database = [
  {
    email: "user1@gmail.com",
    password: "passworded"
  },
  {
    email: "user2@gmail.com",
    password: "pass2"
  }
];
const errors = {
  email: "Invalid Email",
  pass: "Invalid password"
};

const navigate = useNavigate();

const handleSubmit = (event) => {
  // Prevent page reload
  event.preventDefault();

  var { email, pass } = document.forms[0];

  // Find user login info
  const userData = database.find((user) => user.email === email.value);

  // Compare user info
  if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
      navigate('/profile')
    }
  } else {
    // Username not found
    setErrorMessages({ name: "email", message: errors.email });
  }

};
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error" style={{color: 'red'}}>{errorMessages.message}</div>
  );

  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
    return (
       <section style={{width: '100%'}}>
          <section className="login-wrapper flex flexCenter" >

<section className='login_form__container'>
<form onSubmit={handleSubmit} method="get" className="login_signup_form" style={{margin: 0}}>
<div className="flex flexColumn flexCenter">
<div style={{width: '200px'}}>
    <img src={logo} alt="" style={{width: '100%'}} />
</div>
<h3 style={{marginTop: '30px', textAlign: 'center'}}>Welcome Back</h3>
</div>
<div className="form-input">
  <label className="form-label">Email</label>
  <input
    type="email"
    name= "email"
    className="form-control"
    placeholder="Input your email"
    id="email"
    aria-describedby="emailHelp"
    required
  />
</div>
{renderErrorMessage("email")}
<div className="mt-2 form-input">
  <label  className="form-label">Password</label>
  <input
    type={passwordType}
    className="form-control"
    placeholder="Input your password"
    name="pass"
    id="password"
    required
  />
  <span className="login_password" onClick={togglePassword}>
  { passwordType==="password"? <BsFillEyeFill/> :<BsFillEyeSlashFill/>  }
  </span>
</div>
{renderErrorMessage("pass")}
<div className="mb-3 forgot flex">
<NavLink to ='/forgotpassword' style={{color: '#118924', textDecoration: 'none'}}>Forgot Password?</NavLink>
</div>
<button type="submit" className="login_sign-up mt-3 mb-5">SIGN IN</button>
  <div className="flex flexColumn flexCenter">
      <p>Or continue with </p>
      <div className="form-socials flex gap-20">
        <img src={google} alt="icon" />
        <img src={facebook} alt="icon" />
        <img src={twiiter} alt="icon" />
      </div>
      <div className="account d-flex mt-5">
  <p>Don't have an account?</p>
  <NavLink to='/signup' className="log ms-2" href="login.html">Sign Up</NavLink>
</div>
  </div>
</form>
</section>

          </section>
       </section>
    )
  }
  
  export default Login