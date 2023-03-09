import React, {useState} from 'react'
import DashboardNav from './DashboardNav'
import "./dashboard.css"
import { NavLink } from "react-router-dom";
import {BiSearch} from 'react-icons/bi'
import {BsQuestionLg} from 'react-icons/bs'
import {BsFillBellFill} from 'react-icons/bs'
import {HiLockClosed} from 'react-icons/hi'
import {GoThreeBars} from 'react-icons/go'
import {FaUserAlt} from 'react-icons/fa'
import User from '../../assets/dashboarduser.png'
import Icon from '../../assets/notification.png'
import SetUpSecond from './SetUpSecond';

const AccountSettings = () => {
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
    <section className='flex'>
           <section className="accountnav dashboard-home-first-section">
            <DashboardNav/>
           </section>
           <section className="account-main" >
           <header className='dash-home-inner-header flex flexSpaceBtw' style={{width: '100%'}}>
                         <ul className='flex' style={{gap: '20px',padding: '0', width: '100%'}}>
                                <h5 style={{marginTop: '10px'}}>ACCOUNT</h5>
                                <li className='navlinks align-center' style={{gap:'10px'}}>
                                    <form >
                                    <input type="text" className='profile_searchbar account-search' style={{paddingLeft: '45px',border: 'none'}} placeholder='Search'/>
                                    <span className='dashboardnav-search accountnav-search' style={{fontSize: '18px', color: '#999090',    marginLeft:  "-380px"}}><BiSearch/></span>
                                    </form>
                            
                                </li>

                                </ul>
                                <li className='flex flexSpacebtw' style={{width: '35%'}}>
                                 <div  style={{width: '50.99px', height: '50.99px'}}><img src={User} alt="user" /></div>
                                 <h6 className='align-center' style={{fontWeight: '700'}}>Rovel Jordan</h6>
                                 <div style={{marginTop: '17px'}}><img src={Icon} alt="" /></div>
                                </li>
                    </header>
                    <header className=' flex flexSpaceBtw dash-secret-header' style={{width: '100%'}}>
                         <ul style={{gap: '20px',padding: '0',  width: '100%'}}>

                          <div className="flex flexSpacebtw" style={{marginBottom: '20px'}}>
                          <li className='logo2' onClick={openMenu} style={{fontSize: '30px', marginTop: '-15px'}}>
                           <GoThreeBars/>
                          </li>
                          <div  style={{width: '50.99px', height: '50.99px', marginTop: '-15px'}}><img src={User} alt="user" /></div>
                        </div>
                                <li className='dash_searchbar' style={{gap:'10px'}}>
                                    <form >
                                    <input type="text" className='profile_searchbar dash_searchbar' style={{paddingLeft: '45px',border: 'none'}} placeholder='Search'/>
                                    </form>
                            
                                </li>
                                </ul>
                    </header>
                    <div className='dash-hidden-navvv' style={{...Menu}}>
                    <DashboardNav onclickclose={closeMenu}/>
                    </div>
                    <section className='flex gap-20 account-side'>
                        <section className='account-left flex flexColumn gap-20'>
                        <p style={{margin: '0'}}> <span className='me-1'><FaUserAlt/></span>  Profile</p>
                        <p style={{margin: '0'}}> <span className='me-1'><BsFillBellFill/></span> Notification</p>
                        <p style={{margin: '0'}}> <span className='me-1'><HiLockClosed/></span> Password</p>
                        <p style={{margin: '0'}}> <span className='me-1'><BsQuestionLg/></span> Help</p>
                        </section>
                        <section className="account-right">
                            <SetUpSecond/>
                        </section>
                    </section>
           </section>
    </section>
  )
}

export default AccountSettings