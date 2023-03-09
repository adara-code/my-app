import React from 'react'
import './Services.css'
import Img1 from '../../assets/service1.svg'
import Img2 from '../../assets/service2.svg'

const Services = () => {
  return (
   <section className='section section-container'>
<h5>Our Service</h5>
<h2>What We Offer</h2>
<section className='serviceMain'>
    <div className="service-left-section">
       <div className="service-img">
        <img src={Img1} alt="" />
       </div>
    </div>
    <div className="service-right-section">
        <h3>We Connect Recycling Company 
        With Collection Center</h3>
        <p>Our plastic collectors receive financial incentives for collecting plastic waste, and dropping them off at the nearest collection centre..</p>
        
    </div>
</section>
<section className='serviceMain serviceSecondMain'>
    <div className="service-right-section" style={{paddingLeft: '20px'}}>
        <h3>We Connect Recycling Company
        With Collection Center</h3>
        <p>Our recyclers receive precise pickup locations of these plastics making it easier and convenient to collec</p>
        
    </div>
    <div className="service-left-section">
       <div className="service-img">
        <img src={Img2} alt="" />
       </div>
    </div>
</section>
   </section>
  )
}

export default Services