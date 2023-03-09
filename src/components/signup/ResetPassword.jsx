import React, {useState} from "react";
import './SignUp.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.svg'
import {BsFillEyeFill} from 'react-icons/bs'
import {BsFillEyeSlashFill} from 'react-icons/bs'
const ResetPassword = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
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
          <h1>Reset Password</h1>
        </div>
      <section className='form__container'>
      <form action="index.html" method="get" className="signup_form">
      <div className="flex flexColumn flexCenter">
        <div style={{width: '200px'}}>
            <img src={logo} alt="" style={{width: '100%'}} />
        </div>
        <h3 style={{marginTop: '30px', textAlign: 'center'}}>Reset Password</h3>
        </div>
        <div className="mb-3 mt-5 form-input">
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
        <button type="submit" className="sign-up mt-3 mb-5">Reset Password</button>
      </form>
    </section>
       </section>
    )
  }
  
  export default ResetPassword