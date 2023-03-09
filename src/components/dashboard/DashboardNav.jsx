import React from 'react'
import logo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";
import {RiLogoutBoxRLine} from 'react-icons/ri'
import {MdReviews} from 'react-icons/md'
import {RxDashboard} from 'react-icons/rx'
import {ImCross} from 'react-icons/im'
import {HiUsers} from 'react-icons/hi'
import {HiCurrencyDollar} from 'react-icons/hi'
import {IoMdSettings} from 'react-icons/io'
import Img1 from '../../assets/navrect.png'

const DashboardNav = ({onclickclose}) => {
  return (
<section  className="dashboard-nav">
<section className="dashboard-nav-inner flex flexColumn">
<li onClick={onclickclose} className='flex flexColumn dashnavcancel' style={{width: '100%', alignItems: 'flex-end'}}>
      <ImCross/>
    </li>
         <div className="dash-nav-log" style={{width: '180px', marginBottom: '27px', paddingLeft: '40px'}}>
            <img src={logo} alt="logo" />
         </div>
         <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "dashboardactive" : '')} to='/dashboardhome'><div className={"dashboard-nav-item flex"} style={{padding: '20px 40px'}}>
             <RxDashboard style={{fontSize: '24px', marginRight: '10px'}}/>
             <span>DASHBOARD</span>
         </div></NavLink>
         <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "dashboardactive" : '')} to='/dashboardcustomer'><div className="dashboard-nav-item flex" style={{padding: '20px 40px'}}>
             <HiUsers style={{fontSize: '24px', marginRight: '10px'}}/>
             <span>CUSTOMER</span>
         </div></NavLink>
         <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "dashboardactive" : '')} to='/dashboardtransaction'><div className="dashboard-nav-item flex" style={{padding: '20px 40px'}}>
             <HiCurrencyDollar style={{fontSize: '24px', marginRight: '10px'}}/>
             <span>TRANSACTIONS</span>
         </div></NavLink>
         <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "dashboardactive" : '')} to='/dashboardreview'><div className="dashboard-nav-item flex" style={{padding: '20px 40px'}}>
             <MdReviews style={{fontSize: '24px', marginRight: '10px'}}/>
             <span>REVIEW</span>
         </div></NavLink>
         <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "dashboardactive" : '')} to='/dashboardsetting'><div className="dashboard-nav-item flex" style={{padding: '20px 40px'}}>
             <IoMdSettings style={{fontSize: '24px', marginRight: '10px'}}/>
             <span>SETTINGS</span>
         </div></NavLink>
         <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "dashboardactive" : '')} to='/home'><div className="dashboard-nav-item flex" style={{padding: '20px 40px'}}>
             <RiLogoutBoxRLine style={{fontSize: '24px', marginRight: '10px'}}/>
             <span>LOGOUT</span>
         </div></NavLink>

    </section>
    <section>
         <div style={{backgroundColor: '#118924', borderTopRightRadius: '60px', position: "relative"}}>
            <img src={Img1} alt="" />
            <div style={{color: 'white', textAlign: 'center', position: 'absolute', top: '100px', left: '20px'}}>
            <p style={{margin: '0px', fontSize: '20px'}}>Planet</p>
            <p style={{fontSize: '11px'}}>protector</p>
            <p style={{fontSize: '13px'}}>We provide the best support<br/> for our customers to protect <br/> the environment</p>
            <button style={{padding: '10px 20px', background: 'white', borderRadius: '8px', color: '#118924', fontWeight: '700'}}>
                Rate Us
            </button>
            </div>
         </div>
    </section>
</section>
  )
}

export default DashboardNav