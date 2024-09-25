import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div id='about' className='app__aboutus app__bg flex__center section__padding'>
      <div className='app__aboutus-overlay'>
        <img src={images.gletter} alt='glazed overlay'/>
      </div>

      
    </div>
  )
}

export default AboutUs
