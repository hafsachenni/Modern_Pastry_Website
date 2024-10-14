import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';
import {motion} from 'framer-motion';
import {fadeIn} from '../../utils/animations';

const AboutUs = () => {
  return (
    <div id='about' className='app__aboutus app__bg flex__center section__padding'>
      <motion.div
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='app__aboutus-content flex__center' > 
        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.borduredark} alt='bordure' className='spoon__img'/> 
          <p className='p__opensans'> At Glazed, we create delectable pastries and cakes with love and care. Our mission is to bring joy through every bite, using only the finest ingredients to ensure quality.</p>
          <button type='button' className='custom__button-bg'>Know More</button>
        </div>

        <div className='app__aboutus-content_cake flex__center'>
          <img src={images.cake2} alt='deco'/> 
        </div>

        <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.borduredark} alt='bordure' className='spoon__img'/> 
          <p className='p__opensans'> Glazed started as a small family bakery, built on passion and tradition. Today, we continue to bake with the same dedication, crafting sweets that bring happiness to our community.</p>
          <button type='button' className='custom__button-bg'>Know More</button>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutUs
