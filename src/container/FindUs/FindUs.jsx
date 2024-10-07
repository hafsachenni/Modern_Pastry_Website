import React from 'react';
import { SubHeadingmenu } from '../../components';
import {images} from '../../constants';


const FindUs = () => {
  return (
    <div id='contact' className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_info'>
        <SubHeadingmenu title='Contact'/>
        <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className='p__opensans' style={{color: 'black'}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="p__cormorant" style={{color: 'black'}}>Opening Hours</p>
          <p className='p__opensans' style={{color: 'gray'}}>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans' style={{color: 'gray'}}>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type='button' className='custom__button-bg' style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt='visit us'/>
      </div>
    </div>
  )
}

export default FindUs
