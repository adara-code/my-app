import React from 'react'
import './coa.css'
import Img1 from '../../assets/service1.svg'
import Img2 from '../../assets/service2.svg'

const Coa = () => {
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
        <h3>A Depositor</h3>
        <p>With planet protector you can easily dispose your plastic waste at collection center nearest to you and also get paid for it. </p>
        
    </div>
</section>
<section className='serviceMain serviceSecondMain'>
    <div className="service-right-section" style={{paddingLeft: '20px'}}>
        <h3>A Collector</h3>
        <p>Planet protector helps connect plastic depositor with plastic collection centers making it easy for collector to get plastic waste from individuals. </p>
        
    </div>
    <div className="service-left-section">
       <div className="service-img">
        <img src={Img2} alt="" />
       </div>
    </div>
</section>
<section className='serviceMain'>
    <div className="service-left-section">
       <div className="service-img">
        <img src={Img1} alt="" />
       </div>
    </div>
    <div className="service-right-section">
        <h3>A Recycler</h3>
        <p>We help recycler to easily collect plastic waste deposited by the depositors and recycle them into new products . </p>
        
    </div>
</section>
   </section>
  )
}

export default Coa