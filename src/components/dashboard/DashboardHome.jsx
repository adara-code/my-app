import React, {useState} from 'react'
import "./dashboard.css"
import DashboardNav from './DashboardNav'
import { NavLink } from "react-router-dom";
import {BiSearch} from 'react-icons/bi'
import {GoThreeBars} from 'react-icons/go'
import Box1 from '../../assets/dash1.svg'
import Box2 from '../../assets/dash2.svg'
import Box3 from '../../assets/dash3.svg'
import Img1 from '../../assets/barchat.svg'
import Line from '../../assets/rectangle.svg'
import stars from '../../assets/star.png'
import User1 from '../../assets/user1.png'
import User2 from '../../assets/user2.png'
import User3 from '../../assets/user3.png'
import User from '../../assets/profileuser.png'
import Icon from '../../assets/notification.png'
import User4 from '../../assets/dashuser.png'
import User5 from '../../assets/dashuser2.png'
import User6 from '../../assets/dashuser3.png'
import User7 from '../../assets/dashuser4.png'
import User8 from '../../assets/dashuser5.png'
import User9 from '../../assets/dashuser6.png'
import CircleChart from '../../assets/circlechart.png'
import {AiOutlineLeft} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'


const DashboardHome = () => {
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
    const data = [{id:1, img: User1},
        {id:2, img: User2}
        ,{id:3, img: User3}]
    const dashdata = [
        {id:1, img: User4, num:'-#100000', name: 'Steve Matthew', color: '#E72316'},
        {id:2, img: User5, num:'-#200000', name: 'Elliot Recycler', color: '#E72316'},
        {id:3, img: User6, num:'+#459.980', name: 'Alogbe Rachael', color: '#118924'},
        {id:4, img: User7, num:'-#459.560', name: 'Mary Jacobs', color: '#E72316'},
        {id:5, img: User8, num:'+#200000', name: 'Jane Recycler', color: '#118924'},
        {id:6, img: User9, num:'-#459.980', name: 'Agnes Rachael', color: '#E72316'},
    ]
  return (
    <section className='flex'>
        <section className="dashboard-home-first-section">
            <DashboardNav/>
        </section>
        <section className="dashboard-home-second-section">
            <section className="dash-home-inner">
                    <header className='dash-home-inner-header flex flexSpaceBtw' style={{position: ''}}>
                         <ul className='align-center dash-11' style={{gap: '20px',padding: '0'}}>
                                <h5 style={{marginTop: '5px'}}>DASHBOARD</h5>
                                <li className='navlinks align-center' style={{gap:'10px'}}>
                                    <span style={{ fontWeight: '500', fontSize: '14px', color: 'var(--color-green)'}}>Discover</span>
                                    <form >
                                    <input type="text" className='profile_searchbar' style={{paddingLeft: '45px',border: 'none'}} placeholder='Search'/>
                                    <span className='dashboardnav-search' style={{fontSize: '18px', color: '#999090'}}><BiSearch/></span>
                                    </form>
                            
                                </li>
                                </ul>
                    </header>
                    <header className=' flex flexSpaceBtw dash-secret-header' style={{width: '100%'}}>
                         <ul style={{gap: '20px',padding: '0',  width: '100%'}}>

                          <div className="flex flexSpacebtw" style={{marginBottom: '20px'}}>
                          <li className='logo2' onClick={openMenu} style={{fontSize: '25px', marginTop: '-15px'}}>
                           <GoThreeBars/>
                          </li>
                            <span style={{color: 'var(--color-green)'}}>DASHBOARD</span>
                        </div>
                                <li className='dash_searchbar' style={{gap:'10px'}}>
                                    <form >
                                    <input type="text" className='profile_searchbar dash_searchbar' style={{paddingLeft: '45px',border: 'none'}} placeholder='Search'/>
                                    <span className='dashboardnav-search' style={{fontSize: '18px', color: '#999090', marginLeft: '-280px'}}><BiSearch/></span>
                                    </form>
                            
                                </li>
                                </ul>
                    </header>
                    <div className='dash-hidden-navvv' style={{...Menu}}>
                    <DashboardNav onclickclose={closeMenu}/>
                    </div>
                    <main className='dash-home-main' style={{marginTop: '50px'}}>
                       <section className='flex flexSpacebtw dashome-boxes'>
                         <div><img src={Box1} alt="" /></div>
                         <div><img src={Box2} alt="" /></div>
                         <div><img src={Box3} alt="" /></div>
                       </section>
                       <section style={{padding: '20px', background: 'white', borderRadius: '8px', marginTop: '50px', boxShadow: '0.5px 0.5px 0.5px 0.5px #abafaf'}}>
                        <div className="flex flexSpacebtw">
                            <h5>Plastic Sales Statistics</h5>
                            <span style={{color: 'var(--color-green)'}}>See statistics for all time</span>
                        </div>
                        <div className="flex flexSpacebtw" style={{marginTop: '20px'}}>
                            <div className='flex'>
                            <p style={{color: 'var(--color-green)'}} className='flex gap-10px flexCenter'><span>June 2022 </span>   <span className='test-lower flex flexCenter gap-10px'>
                            <span className='flex flexCenter' style={{color: 'white', fontWeight: '500'}}>
                             <AiOutlineLeft/>
                            </span>
                            <span className='flex flexCenter'>
                             <AiOutlineRight/>
                            </span>
                            </span>
                            </p>
                            </div>
                            <div>
                            <select name="Day" style={{border: '1px solid #9D9C9D', borderRadius: '4px', padding: '4px', color: 'black'}}>
                               <option value="day">Day</option>
                               <option value="month">Month</option>
                               <option value="year">Year</option>
                            </select>
                            </div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <img src={Img1} alt="" />
                        </div>
                      <div className="flex gap-20px" style={{marginTop: '20px'}}>
                      <div className="flex flexCenter" style={{gap: '10px'}}>
                            <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#FFC000'}}>

                            </div>
                            <p style={{color: '#3A3A3A', margin: '0'}}>Purchase </p>
                            <p style={{fontWeight: '700',  margin: '0'}}>250kg</p>
                        </div>
                        <div className="flex flexCenter" style={{gap: '10px'}}>
                            <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#118924'}}>

                            </div>
                            <p style={{color: '#3A3A3A', margin: '0'}}>Sold </p>
                            <p style={{fontWeight: '700',  margin: '0'}}>200kg</p>
                        </div>
                      </div>
                       </section>
                      <section style={{marginTop: '50px', padding: '20px', background: 'white', borderRadius: '8px',boxShadow: '0.5px 0.5px 0.5px 0.5px #abafaf'}}>
                      <div className="flex flexSpacebtw" style={{marginBottom: '20px'}}>
                            <h5>Recent reviews</h5>
                            <span style={{color: 'var(--color-green)', cursor: 'pointer'}}>View All</span>
                        </div>
                      <section className="dashboard-reviews flex gap-20" >
                                 {
                      data.map(({id, img})=>{
                          return(
                      <section key={id} className='testimonial-card dash-reviews flex flexColumn' style={{padding: '7px'}}>
                      <div className='flex'>
                      <div className='user-circle' style={{width: '40px', height: '40px', margin: '5px'}}>
                          <img src={img} alt="user" />
                      </div>
                      <div className='flex flexColumn' >
                        <h5 className='test-card-header' style={{margin: '0', fontSize: '14px'}}>Emmanuel King</h5>
                        <p style={{margin: '0', fontSize: '12'}}>Product Designer</p>
                        <div className='Line' style={{width: '53px'}}>
                          <img src={Line} alt="" />
                        </div>
                        <div className="ratings" style={{width: '100px'}}>
                            <img src={stars} alt="" />
                        </div>
                      </div>
                      </div>
                      <p className='testimonial-info' style={{margin: '10px 0 0 0',fontSize: '10px',width: '150px', textAlign: "center"}}>I have more clarity thanks to the allocation, assign processes, and reorder tasks on team capability.</p>
                     </section>
        )
    })
}
                    </section>
                      </section>
                    </main>
            </section>
        </section>
        <section className="dashboard-home-third-section" >
            <div>
                <ul style={{padding: '0'}}>
                <li className='align-center'>
                 <div  style={{marginRight: '10px'}}><img src={User} alt="user" /></div>
                 <h6  style={{fontWeight: '700', marginRight: '50px'}}>Rovel Jordan</h6>
                 <div><img src={Icon} alt="" /></div>
                </li>
                </ul></div>
                <div style={{marginTop: '50px', padding: '10px', border: '1px solid #D5FADB', borderRadius: '8px'}}>
                <div className="flex flexSpacebtw" style={{marginBottom: '20px'}}>
                            <h6>Recent Transaction</h6>
                            <span style={{color: 'var(--color-green)', cursor: 'pointer', fontSize: '14px'}}>View All</span>
                        </div>
                <div className='flex flexColumn' style={{gap: '20px'}}>
                    {
                        dashdata.map(({id,img,num,name,color}) =>{
                            return(
                                <div className="flex flexSpacebtw" key={id}>
                                <div className="flex dash-home-user-img" style={{marginRight: '10px'}}>
                                    <img src={img} alt="" />
                                </div>
                                <div className="flex flexColumn" style={{gap: '5px', fontSize: '14px'}}>
                                    <p style={{margin: '0'}}>{name}</p>
                                    <p style={{margin: '0', fontSize: '13px', color: '#939497'}}>18 Feb 2023</p>
                                </div>
                                <p className='flex flexCenter' style={{fontWeight: '700', margin: '0 0 0 30px',color: `${color}`}}>{num}</p>
                                </div>
                            )
                        }
                            )
                    }
                </div>
                </div>
                <div style={{marginTop: '30px', padding: '10px', border: '1px solid #D5FADB', borderRadius: '8px'}}>
                        <div className="flex flexSpacebtw" style={{marginBottom: '20px'}}>
                            <h6>Request Status</h6>
                            <span style={{color: 'var(--color-green)', cursor: 'pointer', fontSize: '14px'}}>View All</span>
                        </div>
                        <div className='flex' style={{gap: '10px'}}>
                            <div>
                                <img src={CircleChart} alt="" />
                            </div>
                            <div className='flex flexColumn' style={{fontSize: '14px', gap: '8px'}}>
                             <div className="flex" style={{gap: '8px'}}>
                             <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#E72316', marginTop: '7px'}}>

                             </div>
                             <p style={{margin: '0'}}>New</p>
                             </div>
                             <div className="flex" style={{gap: '8px'}}>
                             <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#FFC000',marginTop: '7px'}}>

                             </div>
                             <p  style={{margin: '0'}}>Pending</p>
                             </div>
                             <div className="flex" style={{gap: '8px'}}>
                             <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#118924', marginTop: '7px'}}>

                             </div>
                             <p  style={{margin: '0'}}>Accepted</p>
                             </div>
                            </div>
                            
                        </div>
                    
                </div>
        </section>
    </section>
  )
}

export default DashboardHome