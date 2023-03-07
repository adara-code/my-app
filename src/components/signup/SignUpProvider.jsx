import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import './SignUp.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.svg'
import google from '../../assets/Google.png'
import facebook from '../../assets/Facebook2.png'
import twiiter from '../../assets/Twitter2.png'
import {BsFillEyeFill} from 'react-icons/bs'
import {BsFillEyeSlashFill} from 'react-icons/bs'
const SignUpProvider = () => {
  const [passwordType, setPasswordType] = useState("password");
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
        <div className="flex flexCenter signup-upper">
  
        </div>
      <section className='form__container'>
      <form action="/profile" method="get" className="signup_form">
        <div className="flex flexColumn flexCenter">
        <div style={{width: '200px'}}>
            <img src={logo} alt="" style={{width: '100%'}} />
        </div>
        <h3 style={{marginTop: '30px', textAlign: 'center'}}>Sign up as a plastic provider</h3>
        </div>
        <div className="mt-5 mb-3 form-input">
          <label  className="form-label">Full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input your name"
            id="name"
            required
          />
        </div>
        <div className="mb-3 form-input">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Input your email"
            id="email"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className="mb-3 form-input">
          <label className="form-label">Phone number</label>
          <input
            type='tel'
            className="form-control"
            placeholder="Input your phone number"
            id="number"
            required
          />
        </div>
        <div className="mb-3 form-input">
          <label  className="form-label">Password</label>
          <input
            type={passwordType}
            className="form-control"
            placeholder="Input your password"
            id="password"
            required
          />
          <span className="passwordeye" onClick={togglePassword}>
          { passwordType==="password"? <BsFillEyeFill/> :<BsFillEyeSlashFill/>  }
          </span>
        </div>
        <div className="mb-3 form-input">
          <label className="form-label">Comfirm Password</label>
          <input
          type={passwordType}
            className="form-control"
            placeholder="Comfirm your password"
            id="cpassword"
            required
          />
          <span className="passwordeye" onClick={togglePassword}>
          { passwordType==="password"? <BsFillEyeFill/> :<BsFillEyeSlashFill/>  }
          </span>
        </div>
        <div className="mb-3 form-check ">
          <input type="checkbox" className="form-check-input form-checkbox" id="form-checkbox-input" required />
          <label className="form-check-label" >I agree with terms and policies</label>
        </div>
        <button type="submit" className="sign-up mt-3 mb-5">SIGN UP</button>
          <div className="flex flexColumn flexCenter">
              <p>Or continue with </p>
              <div className="form-socials flex gap-20">
                <img src={google} alt="icon" />
                <img src={facebook} alt="icon" />
                <img src={twiiter} alt="icon" />
              </div>
              <div className="account d-flex mt-5">
          <p>Already have an account?</p>
          <NavLink className="log ms-2" to='/login' style={{ textDecoration: 'none'}}>Sign in</NavLink>
        </div>
          </div>
      </form>
    </section>
       </section>
    )
  }
  
  export default SignUpProvider