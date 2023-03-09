import React from 'react'
import DashboardNav from './DashboardNav'
import "./dashboard.css"
import { NavLink } from "react-router-dom";
import {BiSearch} from 'react-icons/bi'
import {GoThreeBars} from 'react-icons/go'
import User from '../../assets/profileuser.png'
import Icon from '../../assets/notification.png'

import SetUp from './SetUp';

const AccountSettings = () => {
  return (
    <section className='flex'>
           <section className="accountnav">
            <DashboardNav/>
           </section>
           <section className="account-main" style={{background: 'var(--color-light)', width: "100%", padding: '50px 30px 30px 30px'}}>
           <header className='dash-home-inner-header flex flexSpaceBtw' style={{width: '100%'}}>
                         <ul className='flex' style={{gap: '20px',padding: '0', width: '100%'}}>
                                <h5 style={{marginTop: '10px'}}>DASHBOARD</h5>
                                <li className='navlinks align-center' style={{gap:'10px'}}>
                                    <form >
                                    <input type="text" className='profile_searchbar' style={{paddingLeft: '45px',border: 'none'}} placeholder='Search'/>
                                    <span className='dashboardnav-search' style={{fontSize: '18px', color: '#999090',    marginLeft:  "-380px"}}><BiSearch/></span>
                                    </form>
                            
                                </li>

                                </ul>
                                <li className='flex flexSpacebtw' style={{width: '35%'}}>
                                 <div  style={{}}><img src={User} alt="user" /></div>
                                 <h6 className='align-center' style={{fontWeight: '700'}}>Rovel Jordan</h6>
                                 <div style={{marginTop: '17px'}}><img src={Icon} alt="" /></div>
                                </li>
                    </header>
                    <section>
                        <section className="account-right">
                            <SetUp/>
                        </section>
                    </section>
           </section>
    </section>
  )
}

export default AccountSettings