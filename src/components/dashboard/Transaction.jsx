import React, {useState} from 'react'
import DashboardNav from './DashboardNav'
import "./dashboard.css"
import { NavLink } from "react-router-dom";
import {BiSearch} from 'react-icons/bi'
import Box1 from '../../assets/transactionbox1.svg'
import Box2 from '../../assets/transactionbox2.svg'
import {GoThreeBars} from 'react-icons/go'
import User from '../../assets/dashboarduser.png'
import Icon from '../../assets/notification.png'
import filter from '../../assets/filter.svg'
import Table from './table/Table';
import { Secondcolumn } from './table-data/Coulmns';
import { SecondTableData } from './table-data/Data';



const Transaction = () => {
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
           <section className="account-main customer-account-main" >
           <header className='dash-home-inner-header flex flexSpaceBtw' style={{width: '100%'}}>
                         <ul className='flex' style={{gap: '20px',padding: '0', width: '100%'}}>
                                <h5 style={{marginTop: '10px'}}>Transactions</h5>
                                <li className='navlinks align-center' style={{gap:'10px'}}>
                                    <form >
                                    <input type="text" className='profile_searchbar account-search' style={{paddingLeft: '45px',border: 'none'}} placeholder='Search for a Transaction'/>
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
                    <section className='mt-4 customer-main' style={{background: 'white', borderRadius: '8px'}}>
                    <section className='flex gap-20 dashome-boxes cust-box'>
                         <div><img src={Box1} alt="" /></div>
                         <div><img src={Box2} alt="" /></div>
                       </section>
                       <section className="flex mt-5  flexSpacebtw table-nav" >
                        <div className="flex flexCenter gap-20">
                        <span  style={{fontWeight: '600', borderBottom: '4px solid var(--color-green)'}}>All</span>
                         <span style={{fontWeight: '600'}}>Recent</span>
                         <span style={{fontWeight: '600'}}>Pending</span>
                         <span style={{fontWeight: '600'}}>Paid</span>
                        </div>
                         <div><input type="text" className='profile_searchbar table-search' style={{paddingLeft: '30px'}} placeholder='Search for reviews'/></div>
                         <div className="flex flexCenter gap-20 table-filter" style={{    border:" 1px solid #3C3A3B", borderRadius: '8px', padding: '11.5px'}}>
                             <img src={filter} alt="" style={{width: '15px', height: '15px'}}/>
                             <span>Filter</span>
                         </div>
                       </section>
                       <section className="cust-hidden mt-5 flex flexSpacebtw">
                       <span  style={{fontWeight: '600', borderBottom: '4px solid var(--color-green)'}}>All</span>
                       <div className="flex flexCenter gap-20 table-filter" style={{    border:" 1px solid #3C3A3B", borderRadius: '8px', padding: '11.5px'}}>
                             <img src={filter} alt="" style={{width: '15px', height: '15px'}}/>
                             <span>Filter</span>
                         </div>
                       </section>
                    <section className='flex gap-20 customer-table mt-5'>
                           <Table COLUMNS={Secondcolumn} DATA={SecondTableData} width='900px'/>
                    </section>
                    </section>
           </section>
    </section>
  )
}

export default Transaction