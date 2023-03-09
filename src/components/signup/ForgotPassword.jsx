import React, {useState} from "react";
import './SignUp.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.svg'

const ForgotPassword = () => {

  const [passwordInput, setPasswordInput] = useState("");
 
    return (
       <section style={{width: '100%'}}>
        <div className="flex flexCenter signup-upper">
        </div>
      <section className='form__container'>
      <form action="index.html" method="get" className="signup_form">
        <div className="flex flexColumn flexCenter">
        <div style={{width: '200px'}}>
            <img src={logo} alt="" style={{width: '100%'}} />
        </div>
        <h3 style={{marginTop: '30px', textAlign: 'center'}}>Retrieve Password</h3>
        </div>
        <div className="mb-3 mt-5 form-input">
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
        <button type="submit" className="sign-up mt-3 mb-5">Send Reset</button>
      </form>
    </section>
       </section>
    )
  }
  
  export default ForgotPassword