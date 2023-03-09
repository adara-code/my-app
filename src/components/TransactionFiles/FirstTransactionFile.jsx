import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import ProfileNav from '../ProfileNav/ProfileNav'
import './TransactionFile.css'
import TransFive from './TransFive'
import TransFour from './TransFour'
import TransOne from './TransOne'
import TransThree from './TransThree'
import TransTwo from './TransTwo'

const handleChange = () =>{

}

const FirstTransactionFile = () => {
   const [style, setStyle] = useState({
    display: 'block'
   })
   const [show, setShow] = useState({
    display: 'none'
   })
   const [secondShow, setSecondShow] = useState({
    display: 'none'
   })
   const [thirdShow, setThirdShow] = useState({
    display: 'none'
   })
   const [fourthShow, setFourthShow] = useState({
    display: 'none'
   })

   const navigate = useNavigate();

   const showDisplay = (e) =>{
    e.preventDefault()
    setStyle({
        display: 'none'
    })
    setShow({
        display: 'block'
    })
   }
   const showSecondDisplay = (e) =>{
    e.preventDefault()
    setShow({
        display: 'none'
    })
    setSecondShow({
        display: 'block'
    })
   }
   const showThirdDisplay = (e) =>{
    e.preventDefault()
    setSecondShow({
        display: 'none'
    })
    setThirdShow({
        display: 'block'
    })
   }
   const showFourthDisplay = (e) =>{
    e.preventDefault()
    setThirdShow({
        display: 'none'
    })
    setFourthShow({
        display: 'block'
    })
   }
   const showFifthDisplay = (e) =>{
    e.preventDefault()
    navigate('/profile')
    
   }
  return (
    <section>
        <ProfileNav/>
        <div style={{...style}}>
        <TransOne onClick={showDisplay}/>
        </div>
        <div style={{...show}}>
         <TransTwo onClick={showSecondDisplay}/>
        </div>
        <div style={{...secondShow}}>
         <TransThree onClick={showThirdDisplay}/>
        </div>
        <div style={{...thirdShow}}>
            <TransFour onClick={showFourthDisplay}/>
        </div>
        <div style={{...fourthShow}}>
            <TransFive onClick={showFifthDisplay}/>
        </div>

    </section>
  )
}

export default FirstTransactionFile