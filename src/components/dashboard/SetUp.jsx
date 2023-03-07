import React,{useState}from 'react'
import "./setup.css"
import User from '../../assets/dashboarduser.png'
import Icon from '../../assets/photoicon.png'
import Checkbox from './check-box/checkbox'

const SetUp = () => {
    const [activeNav, setActiveNav] = useState ('#')
  return (
    <section style= {{padding: '30px', background: 'white'}}>
    <div style={{height: '150px'}}>
        <div style={{width: '120px', height: '120px'}}>
            <img src={User} alt="" />
        </div>
        <div style={{width: '100px', height: '100px', position: 'relative', bottom: '60px', left: '50px'}}>
            <img src={Icon} alt="" />
        </div>
    </div>
    <form>
        <div className="flex flexSpacebtw" style={{width: '100%'}}>
        <div className="mb-4 ">
          <label  className="form-label" style={{fontWeight: "600", fontSize: '15px'}}>First Name</label>
          <input type="text" className="form-control setup-input" value='Rovel'/>
        </div>
        <div className="mb-4 ">
        <label  className="form-label" style={{fontWeight: "600", fontSize: '15px'}}>Last Name</label>
          <input type="text" className="form-control setup-input" value='Jordan'/>
        </div>
        </div>
        <div className="flex flexSpacebtw" style={{width: '100%'}}>
        <div className="mb-4 ">
          <label  className="form-label" style={{fontWeight: "600", fontSize: '15px'}}>Email</label>
          <input type="email" className="form-control setup-input" value='roveljordan@gmail.com'/>
        </div>
        <div className="mb-4 ">
        <label  className="form-label" style={{fontWeight: "600", fontSize: '15px'}}>Phone Number</label>
          <input type="tel" className="form-control setup-input" value='+2349095225272'/>
        </div>
        </div>
        <div className="flex flexSpacebtw mb-4" style={{width: '100%'}}>
            <div>
            <p style={{fontWeight: "600", fontSize: '15px', marginBottom: '30px'}}>Gender</p>
             <div className='flex gap-20'>
             <Checkbox text='Male' />
            <Checkbox text='Female'/>
             </div>
            </div>
            <div>
          <label  className="form-label" style={{fontWeight: "600", fontSize: '15px'}}>State</label>
          <input type="text" className="form-control setup-input" value='Lagos State'/>
        </div>
        </div>
        <div className="mb-4">
        <p style={{fontWeight: "600", fontSize: '15px', marginBottom: '30px'}}>Register</p>
        <div className='flex' style={{gap: '30px'}}>
            <button onClick={()=> setActiveNav('#')} className={`setup-input-button ${activeNav === '#'? 'set-up-active': ''}`}>As a Collector</button>
            <button onClick={()=> setActiveNav('#about')} className={`setup-input-button ${activeNav === '#about' ? 'set-up-active': ''}`}>As a Depositor</button>
            <button onClick={()=> setActiveNav('#skills')} className={`setup-input-button ${activeNav === '#skills' ? 'set-up-active': ''}`}>As a Recycler</button>
        </div>
        </div>
      </form>
    </section>
  )
}

export default SetUp