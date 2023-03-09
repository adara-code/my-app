import Img from '../../../assets/elliot.svg'
import Img2 from '../../../assets/dashuser.png'
import Img3 from '../../../assets/dashuser2.png'
import Img4 from '../../../assets/dashuser3.png'
import Img5 from '../../../assets/dashuser4.png'
import Img6 from '../../../assets/dashuser5.png'
import Img7 from '../../../assets/dashuser.png'
import Img8 from '../../../assets/dashuser6.png'
import Img9 from '../../../assets/dashuser3.png'
import Img10 from '../../../assets/profileuser2.png'
import Img11 from '../../../assets/profileuser3.png'
import Img12 from '../../../assets/user2.png'
import trash from '../../../assets/trash.png'
export const FirstTableData =  [
    {
        name: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img} alt="" />
            </div>
           <span className='align-center'>Elliot Limited</span>
          </div>
        ),
        status: 'Seller',
        review: '3',
        transactions: '2',
    },
    {
        name: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img2} alt="" />
            </div>
           <span className='align-center'>Reduce Limited</span>
          </div>
        ),
        status: 'Buyer',
        review: 'Nil',
        transactions: '3',
    },
    {
        name: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img3} alt="" />
            </div>
           <span className='align-center'>Jetty Recylers</span>
          </div>
        ),
        status: 'Seller',
        review: '1',
        transactions: '2',
    },
    {
        name: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img4} alt="" />
            </div>
           <span className='align-center'>Elliot Limited</span>
          </div>
        ),
        status: 'Buyer',
        review: '2',
        transactions: '3',
    },
    {
        name: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img5} alt="" />
            </div>
           <span className='align-center'>Planet Limited</span>
          </div>
        ),
        status: 'Buyer',
        review: 'Nil',
        transactions: '2',
    },
    {
        name: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img6} alt="" />
            </div>
           <span className='align-center'>SDGA Limited</span>
          </div>
        ),
        status: 'Buyer',
        review: 'Nil',
        transactions: '5',
    },
    // more data ...
  ]

  export const SecondTableData =  [
    {
        collectors: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img7} alt="" />
            </div>
           <span className='align-center'>Elliot Center</span>
          </div>
        ),
        weight: (<span >10kG</span>),
        price: (<span  style={{color: '#FFB72A', fontWeight: '500'}}>#5000</span>),
        status: (<span >Confirm</span>),
        date: (<span >27 Feb 2023</span>),
        action: ( <div style={{width: "18px", height: '18px', marginRight: '10px'}}>
        <img src={trash} alt="" />
    </div>)
    },
    {
        collectors: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img8} alt="" />
            </div>
           <span className='align-center'>Ray Center</span>
          </div>
        ),
        weight: (<span >10kG</span>),
        price: (<span  style={{color: 'var(--color-green)', fontWeight: '500'}}>#5000</span>),
        status: (<span >Paid</span>),
        date: (<span >25 Feb 2023</span>),
        action: ( <div style={{width: "18px", height: '18px', marginRight: '10px'}}>
        <img src={trash} alt="" />
    </div>)
    },
    {
        collectors: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img9} alt="" />
            </div>
           <span className='align-center'>Ayo Center</span>
          </div>
        ),
        weight: (<span >30kG</span>),
        price: (<span  style={{color: 'var(--color-green)', fontWeight: '500'}}>#3500</span>),
        status: (<span >Paid</span>),
        date: (<span >22 Feb 2023</span>),
        action: ( <div style={{width: "18px", height: '18px', marginRight: '10px'}}>
        <img src={trash} alt="" />
    </div>)
    },
    {
        collectors: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img10} alt="" />
            </div>
           <span className='align-center'>Vick Center</span>
          </div>
        ),
        weight: (<span >50kG</span>),
        price: (<span  style={{color: 'var(--color-green)', fontWeight: '500'}}>#2500</span>),
        status: (<span >Paid</span>),
        date: (<span >20 Feb 2023</span>),
        action: ( <div style={{width: "18px", height: '18px', marginRight: '10px'}}>
        <img src={trash} alt="" />
    </div>)
    },
    {
        collectors: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img11} alt="" />
            </div>
           <span className='align-center'>Hall Center</span>
          </div>
        ),
        weight: (<span >10kG</span>),
        price: (<span  style={{color: 'var(--color-green)', fontWeight: '500'}}>#5000</span>),
        status: (<span >Paid</span>),
        date: (<span >16 Feb 2023</span>),
        action: ( <div style={{width: "18px", height: '18px', marginRight: '10px'}}>
        <img src={trash} alt="" />
    </div>)
    },
    {
        collectors: (
          <div className='flex '>
            <div style={{width: "50px", height: '50px', marginRight: '10px'}}>
                <img src={Img12} alt="" />
            </div>
           <span className='align-center'>Jane Center</span>
          </div>
        ),
        weight: (<span >20kG</span>),
        price: (<span  style={{color: 'var(--color-green)', fontWeight: '500'}}>#7500</span>),
        status: (<span >Paid</span>),
        date: (<span >15 Feb 2023</span>),
        action: ( <div style={{width: "18px", height: '18px', marginRight: '10px'}}>
        <img src={trash} alt="" />
    </div>)
    },
    // more data ...
  ]
  

