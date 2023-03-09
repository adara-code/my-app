import React,{useState}from 'react'
import "./setup.css"
import User from '../../assets/profilesetup.png'
import Icon from '../../assets/photoicon.png'
import Checkbox from './check-box/checkbox'
import { useNavigate } from "react-router-dom";

const SetUp = () => {
    const [activeNav, setActiveNav] = useState ('#')

    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/profile')
    }

    const handleChange = (e) =>{
      e.preventDefault()
    }
  return (
    <section style= {{padding: '30px', background: 'white', borderRadius: '20px'}}>
    <div style={{height: '150px'}}>
        <div style={{width: '120px', height: '120px', borderRadius: '50%'}}>
            <img src={User} alt="" />
        </div>
        <div style={{width: '100px', height: '100px', position: 'relative', bottom: '60px', left: '50px'}}>
            <img src={Icon} alt="" />
        </div>
    </div>
    <form onSubmit={handleSubmit} className='profilesetupform'>
        <div className="flex flexSpacebtw setupfull" style={{width: '100%'}}>
        <div className="mb-4 ">
          <label  className="form-label" style={{fontWeight: "600", fontSize: '15px'}}>First Name</label>
          <input onChange={handleChange} type="text" name="firstName" className="form-control setup-input" />
        </div>
        <div className="mb-4 ">
        <label  className="form-label" style={{fontWeight: "600", fontSize: '15px'}}>Last Name</label>
          <input onChange={handleChange} type="text" name="lastName" className="form-control setup-input" />
        </div>
        </div>
        <div className="flex flexSpacebtw setupfull" style={{width: '100%'}}>
        <div className="mb-4 ">
          <label  className="form-label" style={{fontWeight: "600", fontSize: '15px'}}>Email</label>
          <input onChange={handleChange} type="email" name="email" className="form-control setup-input" />
        </div>
        <div className="mb-4 ">
        <label  className="form-label" style={{fontWeight: "600", fontSize: '15px'}}>Phone Number</label>
          <input onChange={handleChange} type="tel" name="phoneNumber" className="form-control setup-input" />
        </div>
        </div>
        <div className="flex flexSpacebtw setupfull mb-4" style={{width: '100%'}}>
            <div>
            <p style={{fontWeight: "600", fontSize: '15px', marginBottom: '30px'}}>Gender</p>
             <div className='flex gap-20'>
             <Checkbox text='Male' />
            <Checkbox text='Female'/>
             </div>
            </div>
            <div>
          <label  className="form-label setupstate" style={{fontWeight: "600", fontSize: '15px'}}>State</label>
          <input onChange={handleChange} type="text" name="state" className="form-control setup-input" />
        </div>
        </div>
        <div className="mb-4">
        <p style={{fontWeight: "600", fontSize: '15px', marginBottom: '30px'}}>Register</p>
        <div className='flex setup-buttons' style={{gap: '30px'}}>
            <button onClick={()=> setActiveNav('#')} className={`setup-input-button ${activeNav === '#'? 'set-up-active': ''}`}>As a Collector</button>
            <button onClick={()=> setActiveNav('#about')} className={`setup-input-button ${activeNav === '#about' ? 'set-up-active': ''}`}>As a Depositor</button>
            <button onClick={()=> setActiveNav('#skills')} className={`setup-input-button ${activeNav === '#skills' ? 'set-up-active': ''}`}>As a Recycler</button>
        </div>
        </div>
        <div className="flex flexSpacebtw setupfull mb-4" style={{width: '100%'}}>         
        <div>

        <p style={{fontWeight: "600", fontSize: '15px', marginBottom: '30px'}}>Register</p>
         <textarea onChange={handleChange} rows="3" className='setup-textarea' name='message' ></textarea>
         </div>
        </div>
        <div>
         <button style={{background: 'var(--color-green)', color: 'white', marginBottom: '50px'}} className={`setup-input-button`}>Save</button>
         </div>
      </form>
    </section>
  )
}

export default SetUp