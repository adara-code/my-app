import React from 'react'
import './Header.css'
import girlimg from '../../assets/girl1.svg'

const Header = ({images,title}) => {
  return (
  <header className='section-container'>
    <main className='herosection'>
        <div className='left-section'>
          <div className='innerheader'>
          <div>
          <h1>Plastic Recycling <br /> Made Easy</h1>
          <p>The one-stop solution to your businesses recycling needs. <br />
          We help the planet, we help businesses and  <br />
          We give plastics new life.</p>
            

           <button className='button btn-1'>
            Learn More
           </button>
          </div>
           <div className='radios'>
            <div className="radio activeRadio"></div>
            <div className="radio"></div>
            <div className="radio"></div>
            <div className="radio"></div>
           </div>
          </div>
        </div>
        <div className='right-section'>
             <div>
                <img src={girlimg} alt="" />
             </div>
        </div>

    </main>
           
  </header>
  )
}

export default Header