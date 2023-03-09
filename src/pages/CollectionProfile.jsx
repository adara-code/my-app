import React from 'react'
import ProfileNav from '../components/ProfileNav/ProfileNav'
import stars from '../assets/star.png'
import User1 from '../assets/profileuser2.png'
import location1 from '../assets/collectorprofile.png'
import {HiLocationMarker} from 'react-icons/hi'

const CollectionProfile = () => {
  return (
    <div>
        <ProfileNav/>
        <section className='section-container'>
        <section className=' flex flexColumn mb-5' style={{width: '100%'}}>
        <div className='secondcat-image' style={{width: '100%'}}>
            <img src={location1} alt="location" />
        </div>
        <div className='flex gap-20 secondcat-top '>
        <div className='user-circle mt-3' style={{width: '80px', height: '80px'}}>
            <img src={User1} alt="user" />
        </div>
        <div className='flex flexColumn gap-10' >
          <h3>Elliot Collection Center</h3>
          <div className="flex">
          <div className="ratings">
              <img src={stars} alt="" />
          </div>
          <span style={{marginLeft: '10px'}} className='profilecat-review'>20 Review</span>
          </div>
          <div className="flex">
         <span><HiLocationMarker/></span>
         <p style={{marginLeft: '10px', marginBottom: '0'}} className='pc'>2a, Rumokoro New Layout</p>
        </div>
        </div>
        </div>
        </section>
        </section>
    </div>
  )
}

export default CollectionProfile