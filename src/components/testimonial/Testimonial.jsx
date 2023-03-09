import React from 'react'
import './Testimonial.css'
import Line from '../../assets/rectangle.svg'
import stars from '../../assets/star.png'
import User1 from '../../assets/user1.png'
import User2 from '../../assets/user2.png'
import User3 from '../../assets/user3.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Testimonial = () => {
  const data = [{id:1, img: User1},
    {id:2, img: User2}
    ,{id:3, img: User3}]
  return (  
    <section className = 'section section-container '> 
    <h5>Testimonial</h5>
    <h2>What Our Customers Say
    <p className='testimononial-header'>  We've developed genuine friendships with our customers and here are their comments regarding us.</p>
    </h2>
    <main className="testimonials flex">
    {
    data.map(({id, img})=>{
        return(
    <section key={id} className='testimonial-card flex flexColumn'>
    <div className='flex gap-20'>
    <div className='user-circle'>
        <img src={img} alt="user" />
    </div>
    <div className='flex flexColumn gap-20' >
      <h5 className='test-card-header'>Emmanuel King</h5>
      <p>Product Designer</p>
      <div className='Line' style={{width: '53px'}}>
        <img src={Line} alt="" />
      </div>
      <div className="ratings">
          <img src={stars} alt="" />
      </div>
    </div>
    </div>
    <p className='testimonial-info'>I have more clarity thanks to the planet protectors, which makes it easy to track resource allocation, assign processes, and reorder tasks on team capability.</p>
</section>
        )
    })
}

    </main>
    <div className='test-lower flex flexCenter gap-10px' style={{marginTop: '30px'}}>
       <div className='flex flexCenter'>
        <AiOutlineArrowLeft/>
       </div>
       <div className='flex flexCenter'>
        <AiOutlineArrowRight/>
       </div>
    </div>

    

    </section>
  )
}

export default Testimonial