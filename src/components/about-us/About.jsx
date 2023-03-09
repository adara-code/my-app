import React from 'react'
import './About.css'
import Img from '../../assets/about.svg'

const About = () => {
  return (
    <section className='section section-container '>
        <h5 className='toggleup'>About Us</h5>
        <h2 className='toggleup'>Who We Are</h2>
        <section className='about-inner'>
            <div className="about-right-section">
                  <img src={Img} alt="" />
            </div>
            <div className="about-left-section">
            <h5 className='toggledown'>About Us</h5>
            <h2 className='toggledown'>Who We Are</h2>
            <p>Imagine a Nigeria that is free of plastic waste on the roads and in the streets. This is our vision. We are passionate about the environment and our aim is to serve as a bridge between plastic collectors and recyclers.</p>
            <button className='button btn-1 btn-2'>
            Learn More
           </button>
                </div>
        </section>

    </section>
  )
}

export default About