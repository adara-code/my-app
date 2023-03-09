import React from 'react'
import './ProfileHeader.css'
import girlimg from '../../assets/profilegirl1.svg'

const ProfileHeader = () => {
  return (
  <header className='section-container'>
    <main className='herosection'>
        <div className='left-section'>
          <div className='innerheader'>
          <div>
          <h3 style={{color: '#FED301'}}>Welcome Rovel</h3>
          <h1>Plastic Recycling <br /> Made Easy</h1>
          <p>From the small stuff to the big picture, organizes the <br />
           work so teams know what to do, why it matters, and <br />
           how to get it done.</p>
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

export default ProfileHeader