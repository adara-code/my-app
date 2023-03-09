import React from 'react'
import SecondCheckbox from '../dashboard/check-box/secondcheckbox'
import './TransactionFile.css'
import MapImg from '../../assets/map.svg'
import Img from '../../assets/transtwo.svg'
import {HiCurrencyDollar} from 'react-icons/hi'
import {AiFillBank} from 'react-icons/ai'
import {FaRegCircle} from 'react-icons/fa'
import {FaCircle} from 'react-icons/fa'


const handleChange = () =>{

}

const TransTwo = ({onClick}) => {
  return (
    <div>
                <section className='flex flexCenter mt-3'>
            <div className='trans-circle '>1</div>
            <div className='trans-line'></div>
            <div className='trans-circle trans-active'>2</div>
            <div className='trans-line'></div>
            <div className='trans-circle'>3</div>
        </section>
        <section className="section-container">
        <section className="flex flexSpacebtw trans-form mt-5">

          <form>
             <h4 className='mb-4'>Payment Method</h4>
             <div className="flex gap-10 mb-3" style={{fontSize: '18px'}}>
                <span style={{fontSize: '22px'}}><HiCurrencyDollar/></span>
                <span className='transtwoword'  style={{color: '#878080', marginTop:'5px'}}>Cash</span>
                <span  style={{color: 'var(--color-green)', margin: "0 5px", fontSize: '22px'}}><FaRegCircle/></span>
                <span style={{fontSize: '22px'}}><AiFillBank/></span>
                <span className='transtwoword' style={{color: '#878080', marginTop:'5px'}}>Bank Transfer</span>
                <span  style={{color:  'var(--color-green)',  marginLeft: "5px", fontSize: '22px'}}><FaCircle/></span>
             </div>
             <div className="setupfull" style={{width: '100%'}}>
             <div className="mb-4 ">
               <label  className="form-label" style={{fontWeight: "700", fontSize: '15px'}}>Account Name</label>
               <input onChange={handleChange} type="text" className="form-control setup-input" value='Rovel Jordan'/>
             </div>
             <div className="mb-4 ">
             <label  className="form-label" style={{fontWeight: "700", fontSize: '15px'}}>Bank Name</label>
               <input onChange={handleChange} type='text' className="form-control setup-input" value='Union Bank'/>
             </div>
             <div className="mb-4 ">
               <label  className="form-label" style={{fontWeight: "700", fontSize: '15px'}}>Account Number</label>
               <input onChange={handleChange} type='number' className="form-control setup-input" value='2068342896' />
             </div>
             </div>

           <div className="flex flexSpacebtw mb-5 first-bottom trans-header transhidden">
            <div className='align-center'><SecondCheckbox text='Save account details'/></div>
            <button onClick={onClick} className='trans-btn1' style={{width: '150px', height: '50px', background: 'var(--color-green)', color: 'white', borderRadius: '8px'}}>Done</button>
             </div>
        </form>
        <div className='trans-left-section mb-4'>
        <div  className="form-label flex flexSpacebtw trans-header" style={{fontWeight: "600", fontSize: '15px'}}><span>Plastic Drop off Date</span>
              <span style={{color: 'var(--color-green'}}>Change</span></div>
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
              <span style={{color: 'var(--color-green'}}>Change</span></div>
              <div className="flex flexColumn mt-3 trans-header">
                <div style={{width: '100%'}}>
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
        <div className="flex flexSpacebtw mb-5 first-bottom trans-header transshow">
            <div className='align-center'><SecondCheckbox text='Save account details'/></div>
            <button onClick={onClick} className='trans-btn1' style={{width: '150px', height: '50px', background: 'var(--color-green)', color: 'white', borderRadius: '8px'}}>Done</button>
             </div>
            </section>
        </section>
    </div>
  )
}

export default TransTwo