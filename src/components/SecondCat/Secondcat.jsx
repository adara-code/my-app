import React from 'react'
import './SecondCat.css'
import {HiLocationMarker} from 'react-icons/hi'
import stars from '../../assets/star.png'
import User1 from '../../assets/profileuser1.png'
import User2 from '../../assets/profileuser2.png'
import User3 from '../../assets/profileuser3.png'
import location1 from '../../assets/location1.png'
import location2 from '../../assets/location2.png'
import location3 from '../../assets/location3.png'

const SecondCat = () => {
  const data = [{id:1, image: location1,img: User1},
    {id:2, image: location2, img: User2}
    ,{id:3, image: location3, img: User3}]
  return (  
    <section className = 'section section-container '> 
    <div className="flex flexSpacebtw" style={{marginBottom: '50px'}}>
    <h4>Nearby Recycling Station</h4>
    <span style={{color: '#118924'}}>View All</span>
</div>
    <main className="testimonials flex">
    {
    data.map(({id,image, img})=>{
        return(
    <section key={id} className='secondcat-card flex flexColumn'>
    <div className='secondcat-image'>
        <img src={image} alt="location" />
    </div>
    <div className='flex gap-20 secondcat-top'>
    <div className='user-circle'>
        <img src={img} alt="user" />
    </div>
    <div className='flex flexColumn gap-10' >
      <h5>Elliot Collection Center</h5>
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
        )
    })
}

    </main>
    </section>
  )
}

export default SecondCat