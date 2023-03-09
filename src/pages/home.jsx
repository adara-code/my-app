import React from 'react'
import Nav from '../components/nav/Nav'
import Header from '../components/hero-section/Header'
import Services from '../components/services/Services'
import About from '../components/about-us/About'
import Guide from '../components/guideline/Guide'
import Testimonial from '../components/testimonial/Testimonial'
import Faq from '../components/faq/Faq'
import Footer from '../components/footer/Footer'
import Coa from '../components/coa/coa'
const Home = () => {
  return (
    <>
        <Nav/>
        <Header/>
        <Services/>
        <About/>
        <Coa/>
        <Guide/>
        <Testimonial/>
        <Faq/>
        <Footer/>
    </>
  )
}

export default Home