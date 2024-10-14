import React from 'react';
import { SubHeadingmenu } from '../../components';
import {images} from '../../constants';
import {fadeIn} from '../../utils/animations';
import {motion} from 'framer-motion';


const FindUs = () => {
  return (
    <div id='contact' className='app__bg app__wrapper  section__padding'>
      <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='app__wrapper_info'>
        <SubHeadingmenu title='Contact'/>
        <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className='p__opensans' style={{color: 'black'}}>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="p__cormorant" style={{color: 'black'}}>Opening Hours</p>
          <p className='p__opensans' style={{color: 'gray'}}>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans' style={{color: 'gray'}}>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type='button' className='custom__button-bg' style={{ marginTop: '2rem' }}>Visit Us</button>
      </motion.div>

      <motion.div
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='app__wrapper_img'>
        <img src={images.findus} alt='visit us'/>
      </motion.div>
    </div>
  )
}

export default FindUs
