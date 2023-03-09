import React from 'react'
import SetUp from '../components/dashboard/SetUp'

const ProfileSetup = () => {
  return (
   <section style={{background: 'var(--color-light)'}}>
    <section className="profilesetupheader flexColumn align-center">
        <p style={{fontSize: '20px', fontWeight: '600'}}>Welcome To</p>
        <p className='profilesetup-p' style={{fontSize: '40px', fontWeight: '700'}}>Planet Protectors</p>
        <p style={{fontSize: '20px', fontWeight: '600'}}>Set up your profile to continue</p>
    </section>
    <section className='profilesetupcont'>
        <SetUp/>
    </section>
   </section>
  )
}

export default ProfileSetup