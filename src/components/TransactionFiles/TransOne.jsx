import React from 'react'
import SecondCheckbox from '../dashboard/check-box/secondcheckbox'
import './TransactionFile.css'
import MapImg from '../../assets/map.svg'


const handleChange = () =>{

}

const TransOne = ({onClick}) => {
  return (
    <div>
                <section className='flex flexCenter mt-3'>
            <div className='trans-circle trans-active'>1</div>
            <div className='trans-line'></div>
            <div className='trans-circle'>2</div>
            <div className='trans-line'></div>
            <div className='trans-circle'>3</div>
        </section>
        <section className="section-container">
        <section className="flex flexSpacebtw trans-form mt-5">

          <form>
             <h4 className='mb-4'>Enter Plastic Info</h4>
             <div className="setupfull" style={{width: '100%'}}>
             <div className="mb-4 ">
               <label  className="form-label" style={{fontWeight: "700", fontSize: '15px'}}>Plastic Categories</label>
               <input onChange={handleChange} type="text" className="form-control setup-input" value='1A Gynoscope  GRA Lagos'/>
             </div>
             <div className="mb-4 ">
             <label  className="form-label" style={{fontWeight: "700", fontSize: '15px'}}>Number of Plastic</label>
               <input onChange={handleChange} type='number' className="form-control setup-input" value='38'/>
             </div>
             </div>
             <div className="setupfull" style={{width: '100%'}}>
             <div className="mb-4 ">
               <div  className="form-label flex flexSpacebtw trans-header" style={{fontWeight: "600", fontSize: '15px'}}><span>Plastic Drop off Date</span>
               <input type="date"  style={{background:'#D9D9D9', padding: '8px', borderRadius: '5px', color:'#555555', width: '145px'}}/></div>
               <input onChange={handleChange} type="text" className="form-control setup-input" value='25/2/2022 (10AM)'/>
             </div>
             <div className="mb-4 ">
               <label  className="form-label" style={{fontWeight: "700", fontSize: '15px'}}>Photo of Plastic</label>
               <input onChange={handleChange} type='text' className="form-control setup-input" style={{height: '200px'}} />
             </div>
           </div>
           <div className="flex flexSpacebtw mb-5 first-bottom trans-header transhidden">
            <div className='align-center'><SecondCheckbox text='Save Location'/></div>
            <button className='trans-btn1' style={{width: '200px', height: '57px', background: 'var(--color-green)', color: 'white', borderRadius: '8px'}}  onClick={onClick}>Next</button>
             </div>
        </form>
        <div className='trans-left-section mb-4'>
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
        </div>
        <div className="flex flexSpacebtw mb-5 first-bottom trans-header transshow">
            <div className='align-center'><SecondCheckbox text='Save account details'/></div>
            <button className='trans-btn1' style={{width: '150px', height: '50px', background: 'var(--color-green)', color: 'white', borderRadius: '8px'}} onClick={onClick}>Done</button>
             </div>
            </section>
        </section>
    </div>
  )
}

export default TransOne