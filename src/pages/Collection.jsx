import React from 'react'
import { NavLink } from "react-router-dom";
import ProfileNav from '../components/ProfileNav/ProfileNav'
import filter from '../assets/filter.svg'
import {HiLocationMarker} from 'react-icons/hi'
import stars from '../assets/star.png'
import User1 from '../assets/profileuser2.png'
import User2 from '../assets/profileuser1.png'
import User3 from '../assets/profileuser3.png'
import User4 from '../assets/dashuser.png'
import User5 from '../assets/dashuser3.png'
import User6 from '../assets/dashuser4.png'
import User7 from '../assets/collectoruser.png'
import User8 from '../assets/collectoruser2.png'
import User9 from '../assets/dashuser.png'
import location1 from '../assets/location1.png'
import location2 from '../assets/location2.png'
import location3 from '../assets/location3.png'
import location4 from '../assets/location4.png'
import location5 from '../assets/location5.png'
import location6 from '../assets/location6.png'
import location7 from '../assets/location7.png'
import location8 from '../assets/location8.png'
import location9 from '../assets/location9.png'
import Footer from '../components/footer/Footer';

const Collection = () => {
    const data = [{id:1, image: location1,img: User1},
        {id:2, image: location2, img: User2}
        ,{id:3, image: location3, img: User3},
        {id:4, image: location4,img: User4},
        {id:5, image: location5, img: User5}
        ,{id:6, image: location6, img: User6},
        {id:7, image: location7,img: User7},
        {id:8, image: location8, img: User8}
        ,{id:9, image: location9, img: User9},
        {id:10, image: location4,img: User4},
        {id:11, image: location2, img: User2}
        ,{id:12, image: location3, img: User3},
        {id:13, image: location6,img: User6},
        {id:14, image: location2, img: User2}
        ,{id:15, image: location3, img: User3},
    ]
  return (
    <div>
        <ProfileNav/>
        <section className="section-container">
            <nav style={{width: '100%'}}>
            <ul className='flex flexCenter' style={{width: '100%', padding: '0', marginBottom: '0'}}>
            <li className='navlinks align-center'>
              <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/home'>Home</NavLink>
              <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to ='/features'>Features</NavLink>
              <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to ='/Pricing'>Pricing</NavLink>
              <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to ='/about'>About Us</NavLink>
              <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to ='/contact'>Contact Us</NavLink>
           </li>
            </ul>
            </nav>
            <header>
            <section className="flex mt-4  flexCenter table-nav" >
                        <div className="flex flexCenter gap-20">
                        <span  style={{fontWeight: '600'}}>All</span>
                         <span style={{fontWeight: '600', borderBottom: '4px solid var(--color-green)'}}>Near Me</span>
                         <span style={{fontWeight: '600'}}>Popular</span>
                         <span style={{fontWeight: '600'}}>Most Rated</span>
                         <span style={{fontWeight: '600'}}>Largest</span>
                         <span style={{fontWeight: '600'}}>Smallest</span>
                         <span style={{fontWeight: '600'}}>New</span>
                         <span style={{fontWeight: '600'}}>Closest</span>
                         <div className="flex flexCenter gap-20" style={{    border:" 1px solid #3C3A3B", borderRadius: '8px', padding: '11.5px'}}>
                             <img src={filter} alt="" style={{width: '15px', height: '15px'}}/>
                             <span>Filter</span>
                         </div>
                        </div>

                       </section>
                       <section className="flex mt-3  flexCenter collection-nav" >
                        <div className="flex flexCenter" style={{gap: '30px'}}>
                        <span  style={{fontWeight: '600'}}>All</span>
                        <span  style={{fontWeight: '600', borderBottom: '4px solid var(--color-green)'}}>Near Me</span>
                         <div className="flex flexCenter gap-20" style={{    border:" 1px solid #3C3A3B", borderRadius: '8px', padding: '11.5px'}}>
                             <img src={filter} alt="" style={{width: '15px', height: '15px'}}/>
                             <span>Filter</span>
                         </div>
                        </div>

                       </section>
            </header>
            <main className='flexWrap mt-5 testimonials' style={{columnGap: '30px'}}>
            {
        data.map(({id,image, img})=>{
            return(
        <section key={id} className='secondcat-card flex flexColumn mb-5'>
        <div className='secondcat-image'>
            <img src={image} alt="location" />
        </div>
        <div className='flex gap-20 secondcat-top collection-card-large'>
        <div className='user-circle mt-3' style={{width: '59px', height: '59px'}}>
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
        <div className='flexCenter gap-10 flexColumn secondcat-top collection-card-small'>
            <div className="flex gap-10">
            <div className='user-circle' style={{width: '50px', height: '50px'}}>
                <img src={img} alt="user" />
            </div>
            <h5 className='align-center' style={{fontSize: '16px', marginBottom: '0'}}>Elliot Collection Center</h5>
            </div>

        <div className='flex flexColumn gap-10' >
      
          <div className="flex">
          <div className="ratings">
              <img src={stars} alt="" />
          </div>
          <span style={{marginLeft: '10px', fontSize: '15px'}} className='profilecat-review align-center'>20 Review</span>
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
        <Footer/>
    </div>
  )
}

export default Collection