import React from 'react'
import SecondCheckbox from '../dashboard/check-box/secondcheckbox'
import './TransactionFile.css'
import Img from '../../assets/profileuser2.png'



const handleChange = () =>{

}

const TransThree = ({onClick}) => {
  return (
    <div>
                <section className='flex flexCenter mt-3'>
            <div className='trans-circle '>1</div>
            <div className='trans-line'></div>
            <div className='trans-circle '>2</div>
            <div className='trans-line'></div>
            <div className='trans-circle trans-active'>3</div>
        </section>
        <section className="section-container">
        <section className="flex flexSpacebtw trans-form mt-5">
        <div className='trans-left-section mb-4'>
        <h4 className='mb-4'>Payment Confirmation</h4>
        <p style={{fontWeight: '700'}}>Collector</p>
            <div className="flex flexColumn mt-3 trans-header">
                <div className='flex gap-10' style={{alignItems: 'center', padding: '20px', border: '1.5px solid #D3D4D8'}}>
                    <div><img src={Img} alt="" /></div>
                    <span className='transpan'>Elliot Collection Center</span>
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
            <p style={{fontWeight: '700'}} className='mt-4'>Weight Info</p>
            <div className="flex flexColumn gap-20 mb-4 trans-header" style={{padding: '20px', border: '1.5px solid #D3D4D8'}}>
            <div className='flex gap-10' style={{alignItems: 'center', }}>
                    <h6 className='trans-h6' style={{marginBottom: '0'}}>Plastic Weight:</h6>
                    <span className='transpan'>6kg</span>
                </div>
                <div className='flex gap-10' style={{alignItems: 'center'}}>
                    <h6 className='trans-h6' style={{marginBottom: '0'}}>Generated Amount:</h6>
                    <span className='transpan'>#5000</span>
                </div>
            </div>
            <div className="flex flexSpacebtw mb-4 first-bottom trans-header">
            <div className='align-center'><SecondCheckbox text='By clicking confirm, you agree you have received money from collector'/></div>
             </div>
             <button onClick={onClick} className=' mb-5' style={{width: '100%', height: '50px', background: 'var(--color-green)', color: 'white', borderRadius: '8px'}}>Confirm</button>
        </div>


            </section>
        </section>
    </div>
  )
}

export default TransThree