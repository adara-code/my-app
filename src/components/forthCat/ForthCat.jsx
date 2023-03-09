import React from 'react'
import './ForthCat.css'
import {AiFillHeart} from 'react-icons/ai'
import {BsFillEyeFill} from 'react-icons/bs'
import location1 from '../../assets/news1.png'
import location2 from '../../assets/news2.png'
import location3 from '../../assets/news3.png'
import location4 from '../../assets/news4.png'

const ForthCat = () => {
  const data = [{id:1, image: location1},
    {id:2, image: location2}
    ,{id:3, image: location3},
    {id:4, image: location4}
]
  return (  
    <section className = 'section section-container '> 
    <div className="flex flexSpacebtw" style={{marginBottom: '50px'}}>
    <h4>Lastest News</h4>
    <span style={{color: '#118924'}}>View All</span>
</div>
    <main className="testimonials flex">
    {
    data.map(({id,image, img})=>{
        return(
    <section key={id} className='secondcat-card flex flexColumn'>
    <div className='fourthcat-image'>
        <img src={image} alt="location" />
    </div>
    <div className='flex gap-20 secondcat-top'>
    <div className='flex flexColumn gap-10 fourthcart-info flexCenter' >
      <h5>The Benefit of Recyling</h5>
      <div className="flex flexCenter">
       <p style={{color: '#939497', marginBottom: '0px'}}>Posted 1 Week ago</p>
      <span style={{marginLeft: '10px'}} className='profilecat-review'><AiFillHeart/><span style={{marginLeft: '8px'}} >5</span></span>
      <span style={{marginLeft: '10px'}} className='profilecat-review'><BsFillEyeFill/><span style={{marginLeft: '8px'}} >20</span></span>
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

export default ForthCat