import React from 'react';
import './Chef.css';
import {images} from '../../constants';
import {SubHeadingmenu } from '../../components';
import {motion} from 'framer-motion';
import {fadeIn} from '../../utils/animations';

const Chef = () => {
  return (
    <div className='app__bg section__padding app__wrapper' style={{background:'#ebebeb'}}>
      <motion.div
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.pastrychef} alt='pastry chef' style={{borderTopLeftRadius: '120px', borderBottomRightRadius: '120px' }}/>
      </motion.div>
      <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='app__wrapper_info'>
        <SubHeadingmenu title="Chef's word" />
        <h1 className='headtext__cormorant' style={{marginTop:'-20px'}}>What we believe in</h1>
        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quotation} alt='quote'/>
            <p className='p__opensans' style={{color: 'black'}}>Our passion for crafting exquisite pastries comes from years of dedication.</p>
          </div>
          <p className='p__opensans' style={{color: 'black'}}>Each creation tells a story, blending innovation and heritage in every bite. We believe in sharing moments of joy through the finest ingredients and masterful techniques, bringing happiness one pastry at a time.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Ray</p>
          <p className='p__opensans' style={{color:'black'}}>Chef & Founder</p>
          <img src={images.signature} alt="chef's signature"/>
        </div>
      </motion.div>
    </div>
  )
}

export default Chef
