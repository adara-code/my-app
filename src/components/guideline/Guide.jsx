import React from 'react'
import './Guide.css'

const Guide = () => {
    const data = [{id:1, h4: 'Sign Up'},{id:2, h4: 'Connect'},{id:3, h4: 'Sell'}]
  return (
 <section className='section section-container guide-container'>
    <h5 className='guide-h5'>How it works</h5>
    <h2>3 Steps To Get Started</h2>
<main className="guide-innerwrapper">
{
    data.map(({id,h4})=>{
        return(
    <section key={id} className='guide-steps'>
    <div className='guide-steps-circle'>
        <span>{id}</span>
    </div>
    <h4>{h4}</h4>
    <p>Ttrack has moved forward to get you accurate AI predictions of when projects can be completed, capturing constraints like cost.</p>
</section>
        )
    })
}
</main>
 </section>
  )
}

export default Guide