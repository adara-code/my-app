import React, {useState} from "react";
import axios from "axios"
import { NavLink } from "react-router-dom";
import './Login.css'
import logo from '../../assets/logo.svg'
import google from '../../assets/Google.png'
import facebook from '../../assets/Facebook2.png'
import twiiter from '../../assets/Twitter2.png'
import {BsFillEyeFill} from 'react-icons/bs'
import {BsFillEyeSlashFill} from 'react-icons/bs'


const SignUpAs = () => {
  const [passwordType, setPasswordType] = useState("password");

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const baseUrl = 'https://eco-elites-api.up.railway.app'

  function handleSubmit(event) {
    event.preventDefault();

    axios.post(`${baseUrl}/signup`, formData)
      .then(response => {
        console.log('API response:', response.data);
      })
      .catch(error => {
        console.error('API error:', error);
      });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
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
<form onSubmit={handleSubmit} style={{margin: 0}} className="login_signup_form">
<div className="flex flexColumn flexCenter">
<div style={{width: '200px'}}>
    <img src={logo} alt="" style={{width: '100%'}} />
</div>
<h3 style={{marginTop: '30px', textAlign: 'center'}}>Hello, Let's Get Started</h3>
</div>
<div className="form-input">
  <label className="form-label">Email</label>
  <input
    type="email"
    name= "email"
    className="form-control"
    value={formData.email}
    onChange={handleInputChange}
    placeholder="Input your email"
    required
  />
</div>
<div className="mt-3 form-input">
  <label  className="form-label">Password</label>
  <input
    type={passwordType}
    className="form-control"
    name="password"
    value={formData.password}
    onChange={handleInputChange}
    placeholder="Input your password"
    required
  />
  <span className="login_password" onClick={togglePassword}>
  { passwordType==="password"? <BsFillEyeFill/> :<BsFillEyeSlashFill/>  }
  </span>
</div>

 


<p className="mb-3">
By signing up, you agree to planet protectors <b style={{color: '#118924'}}>Terms of service</b>  & acknowledge the <b style={{color: '#118924'}}>Privacy Policy </b> 
</p>

<button type="submit" className="login_sign-up mt-3 mb-5">SIGN UP</button>
<p className="flex flexCenter mb-4">
  Or Continue With
</p>
<NavLink to='/sign-up-provider' className="log " ><button type="submit" className="special-sign-up mt-3 mb-3 flex flexCenter">  <img src={google} alt="icon" style={{width: '32px', height: '32px', marginRight: '16px'}}/> Google</button>    </NavLink>
<NavLink to='/sign-up-provider' className="log " ><button type="submit" className="special-sign-up mt-3 mb-3 flex flexCenter">  <img src={facebook} alt="icon" style={{width: '32px', height: '32px', marginRight: '16px'}}/>Facebook</button>    </NavLink>

  <div className="flex flexColumn flexCenter">
      <p>Connect with us </p>
      <div className="form-socials flex gap-20">
        <img src={google} alt="icon" />
        <img src={facebook} alt="icon" />
        <img src={twiiter} alt="icon" />
      </div>
      <div className="account d-flex mt-5">
  <p>Don't have an account?</p>
  <NavLink to='/login' className="log ms-2" >Sign In</NavLink>
</div>
  </div>
</form>
</section>

          </section>
       </section>
    )
  }
  
  export default SignUpAs