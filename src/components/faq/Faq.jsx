import React, {useState} from 'react'
import './Faq.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const Faq = () => {
  const [faqs, setfaqs] = useState([
    {id:0, open: true},
    {id:1, open: false},
    {id:2, open: false},
    {id:3, open: false}, 
    {id:4, open: false}])
  


  const toogleFAQ = index =>{
    setfaqs(faqs.map((faq, i) =>{
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
    }
  



  return (
  <section className = 'section section-container Faq'>
<h5>FAQs</h5>
<h2>Frequently Asked Questions</h2>
<main className="faq-container">
{
    faqs.map(({id,open})=>{
        return(
          
          <div className="faq-card" key={id}>
          <div className={`flex flexSpacebtw faq-upper`}>
          <p>Is my personal information secure</p>
           <span className='plus' onClick = {() => toogleFAQ(id)}>{open? <AiOutlineMinus/>: <AiOutlinePlus/>}</span>
          </div>
          <div className={`faq-lower ${(open ? `faqopen` :'')}`} >
            <p>Lorem ipsum dolor sit amet consectetur. Ac lobortis bland  eros nis modo ullamcorper metus nullam sed  bland nisl. Commodo ull</p>
          </div>
      
          
        </div>

        )
    })
}
</main>
  </section>
  )
}

export default Faq