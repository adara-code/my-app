import React from 'react'
import './ThirdCat.css'
import { NavLink } from "react-router-dom";

const ThirdCat = () => {
  return (
  <section className="section section-container ">
   <div className="flex thirdcat-cont">
       <div className="flex flexColumn thirdcat-card1">
        <h3>Want to be a collector?</h3>
        <p>Register and start collecting <br/>plastics.</p>
        <NavLink style={{textDecoration: 'none', backgroundColor: 'white'}}  to ='/sign-up-collector'  className='SignUp register button'>Register now</NavLink>
        
       </div>
       <div className="flex flexColumn thirdcat-card2">
        <h4>Want to be a recycler?</h4>
        <p>It’s easy to get started once <br /> you are ready.</p>
        <NavLink style={{textDecoration: 'none', backgroundColor: 'white'}}  to ='/sign-up-provider'  className='SignUp register button'>Register now</NavLink>
        
       </div>
   </div>
  </section>
  )
}

export default ThirdCat