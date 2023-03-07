import React from 'react'
import ProfileNav from '../components/ProfileNav/ProfileNav'
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import FirstCategory from '../FirstCategory/FirstCategory'
import SecondCat from '../components/SecondCat/Secondcat'
import ThirdCat from '../components/ThirdCat/ThirdCat'
import ForthCat from '../components/forthCat/ForthCat'
import Footer from '../components/footer/Footer'
const Profile = () => {
  return (
    <div>
        <ProfileNav/>
        <ProfileHeader/>
        <FirstCategory/>
        <SecondCat/>
        <ThirdCat/>
        <ForthCat/>
        <Footer/>

    </div>
  )
}

export default Profile