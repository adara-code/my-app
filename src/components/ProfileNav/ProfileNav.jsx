import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import './ProfileNav.css'
import Logo from '../../assets/logo.svg'
import {MdCancel} from 'react-icons/md'
import User from '../../assets/profileuser.png'
import {BsFillBellFill} from 'react-icons/bs'
import {RiMessage2Fill} from 'react-icons/ri'


const ProfileNav = () => {

  return (
<nav className='section-container nav'>
  <ul className='align-center'>
    <li className='logo' style={{marginLeft: '100px'}} >
      <img src={Logo}  alt=""  />
    </li>
    <li className='logo2' style={{marginLeft: '30px'}}>
      <img src={Logo} alt=""  />
    </li>
    <li className='navlinks align-center'>
        <span style={{paddingBottom: '5px', borderBottom: ' 3px solid #118924', fontWeight: '500'}}>Discover</span>
        <form >
        <input type="text" className='profile_searchbar' placeholder='Search'/>
        <span className='profilenav_cancel' style={{fontSize: '25px'}}><MdCancel></MdCancel></span>
        </form>

    </li>
    <li className='profilenav_user_icons align-center'>
    <span><RiMessage2Fill/></span>
        <span><BsFillBellFill></BsFillBellFill></span>
        <NavLink to='/dashboardhome'><div><img src={User} alt="user" /></div></NavLink>
    </li>
  </ul>

</nav>
  )
}

export default ProfileNav