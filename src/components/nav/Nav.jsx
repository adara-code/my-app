import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css'
import Logo from '../../assets/logo.svg'
import {HiHome} from 'react-icons/hi'
import {GiStarFormation} from 'react-icons/gi'
import {ImPriceTags} from 'react-icons/im'
import {MdRecycling} from 'react-icons/md'
import {MdOutlineContactSupport} from 'react-icons/md'
import {BiLogIn} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'
import {GoThreeBars} from 'react-icons/go'


const Nav = () => {
  const [Menu, showMenu] = useState({
    display: "none"
  })

  const openMenu = () =>{
    showMenu({
      display: 'flex'
    })
  }
  const closeMenu = () =>{
    showMenu({
      display: 'none'
    })
  }
  return (
<nav className='section-container nav'>
  <ul className='align-center'>
    <li className='logo' style={{marginLeft: '100px'}} >
      <img src={Logo} alt=""  />
    </li>
    <li className='logo2' onClick={openMenu} style={{marginLeft: '30px', fontSize: '25px'}}>
      <GoThreeBars/>
    </li>
    <li className='navlinks align-center'>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/home'>Home</NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to ='/features'>Features</NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to ='/Pricing'>Pricing</NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to ='/about'>About Us</NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to ='/contact'>Contact Us</NavLink>
    </li>
    <li className='login align-center'>
      <NavLink style={{textDecoration: 'none'}}  to ='/login'>Sign in</NavLink>
      <NavLink style={{textDecoration: 'none'}}  to ='/signup'  className='SignUp align-center button'>Sign Up</NavLink>
    </li>
  </ul>
  <div className='show_menu' style={{...Menu}}>
  <div className='flex flexSpacebtw' style={{fontSize: '18px', width: '100%', fontWeight: '600'}}>
  <li className='logo2' >
      <img src={Logo} alt="" />
    </li>
    <li onClick={closeMenu}>
      <ImCross/>
    </li>
  </div>

       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/home'><span className='navicon'><HiHome/></span> <span>Home</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/features'><span className='navicon'><GiStarFormation/></span> <span>Features</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/Pricing'><span className='navicon'><ImPriceTags/></span> <span>Pricing</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/about'><span className='navicon'><MdRecycling/></span> <span>About Us</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/contact'><span className='navicon'><MdOutlineContactSupport/></span> <span>Contact Us</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/login'><span className='navicon'><BiLogIn/></span> <span>Sign in</span></NavLink>
  </div>

</nav>
  )
}

export default Nav