import React from 'react'
import './Footer.css'
import Img from '../../assets/logo2.svg'
import logo1 from '../../assets/facebook.png'
import logo2 from '../../assets/linkedin.svg'
import logo3 from '../../assets/twitter.png'
import logo4 from '../../assets/instagram.svg'

const Footer = () => {
  return (
    <footer className='section section-container footer flex flexColumn'>
    <section className="footerupper">
    <main className="footer_innerwrapper flex flexSpacebtw">
        <section className="footer-first-section flex flexColumn gap-30">
            <div className='footerlogo '>
              <img src={Img} alt="logo" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur. Senectus sed sem feugiat diam netus vitae senectus. Magna adipiscing dui tellus viverra nisl bibendum et consequat nullam.</p>
            <div className='footericons flex gap-20'>
              <a href="#">
              <div className='socials'>
                <img src={logo1} alt="socials" />
              </div>
              </a>
                <a href="">
                <div className='socials'>
                <img src={logo2} alt="socials" />
              </div>
                </a>
                <a href="#">
                <div className='socials'>
                <img src={logo3} alt="socials" />
              </div>
                </a>
              <a href="#">
              <div className='socials'>
                              <img src={logo4} alt="socilas" />
                            </div>
              </a>

            </div>
       </section>
       <section className="footer-second-section flex flexColumn gap-30">
        <h3>Quick Link</h3>
        <a href="#">About Us</a>
        <a href="#">Home Insurance</a>
        <a href="#">How it</a>
        <a href="#">FAQs</a>
        <a href="#">Contact Us</a>
  
        </section>
        <section className="footer-third-section flex flexColumn gap-30">
          <h3>Stay Connected</h3>
          <p>Subscribe for our news letter to receive real estate and acquisition news and investement opportunities </p>
          <form action="" method='get' className ='footerform'>
                 <input type="email" placeholder = 'Email'
                 className='footerinput'
                 />   
                 <input type="submit"  className='emailsubmit'/> 
          </form>
        
        </section>
      </main>
    </section>
    <section className="footerlower flex flexSpacebtw">
      <p>© 2022, All rights reserved to by Eco Elite</p>
      <p><a href="#">Terms of Use | Privacy Policy</a></p>
    </section>

    </footer>
  )
}

export default Footer