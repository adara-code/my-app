import React from 'react'
import SecondCheckbox from '../dashboard/check-box/secondcheckbox'
import './TransactionFile.css'
import MapImg from '../../assets/map.svg'
import Img from '../../assets/transtwo.svg'



const handleChange = () =>{

}

const TransFive = ({onClick}) => {
  return (
    <div>
    
        <section className="section-container">
        <section className="flex flexSpacebtw trans-form mt-5">
      
        <div className='trans-left-section mb-4'>
        <h4 className='mb-4'>Transaction Summary</h4>
        <div  className="form-label flex flexSpacebtw trans-header" style={{fontWeight: "600", fontSize: '15px'}}><span>Plastic Drop off Date</span>
        </div>
            <div className="flex flexColumn gap-20 mb-4 trans-header" style={{padding: '20px', border: '1.5px solid #D3D4D8'}}>
            <div className='flex gap-10' style={{alignItems: 'center', }}>
                    <h6 className='trans-h6' style={{marginBottom: '0'}}>Plastic Categories:</h6>
                    <span className='transpan'>Water cans, Old buckets</span>
                </div>
                <div className='flex gap-10' style={{alignItems: 'center'}}>
                    <h6 className='trans-h6' style={{marginBottom: '0'}}>Number of Plastics:</h6>
                    <span className='transpan'>100</span>
                </div>
                <div className='flex gap-10' style={{alignItems: 'center'}}>
                    <h6 className='trans-h6' style={{marginBottom: '0'}}>Plastic drop off date:</h6>
                    <span className='transpan'>March 1st 2023, 10Am</span>
                </div>
            </div>
            <p style={{fontWeight: '700'}}>Elliot Collection Center Address</p>
            <div className="flex flexColumn mt-3 trans-header">
                <div className='flex gap-10' style={{alignItems: 'center', padding: '20px', border: '1.5px solid #D3D4D8'}}>
                    <h6 className='trans-h6' style={{marginBottom: '0'}}>Location:</h6>
                    <span className='transpan'>2a, Rumokoro New Layout</span>
                </div>
                <div style={{width: '100%'}}>
                    <img src={MapImg} alt="" />
                </div>
            </div>
            <div  className="form-label flex flexSpacebtw trans-header mt-4" style={{fontWeight: "600", fontSize: '15px'}}><span>Plastic Image</span>
             </div>
              <div className="flex flexColumn mt-3 trans-header">
                <div style={{width: '100%'}}>
                    <img src={Img} alt="" />
                </div>
            </div>
            <p style={{fontWeight: '700'}} className='mt-4'>Payment Method</p>
            <div className="flex flexColumn gap-20 mb-4 trans-header" style={{padding: '20px', border: '1.5px solid #D3D4D8'}}>
            <div className='flex gap-10' style={{alignItems: 'center', }}>
                    <h6 className='trans-h6' style={{marginBottom: '0'}}>Account Name:</h6>
                    <span className='transpan'>Rachel Jordan</span>
                </div>
                <div className='flex gap-10' style={{alignItems: 'center'}}>
                    <h6 className='trans-h6' style={{marginBottom: '0'}}>Bank Name:</h6>
                    <span className='transpan'>Union Bank</span>
                </div>
                <div className='flex gap-10' style={{alignItems: 'center'}}>
                    <h6 className='trans-h6' style={{marginBottom: '0'}}>Account Number:</h6>
                    <span className='transpan'>2068342896</span>
                </div>
            </div>
              <p style={{color: 'var(--color-green)', fontWeight: '700', marginBottom: '0'}}>Wait For Collector to Make Payment</p>
              <p>Once payment is made , you will be notified</p>
             <button onClick={onClick}  className=' mb-5' style={{width: '100%', height: '50px', background: 'var(--color-green)', color: 'white', borderRadius: '8px'}}>Back To Discover</button>
        </div>
            </section>
        </section>
    </div>
  )
}

export default TransFive