import React from 'react';
import {images} from '../../constants';
import {data} from '../../constants';
import './SpecialMenu.css';
import {SubHeadingmenu, MenuItem} from '../../components';
import {motion} from 'framer-motion';
import {fadeIn} from '../../utils/animations';

const SpecialMenu = () => {
  return (
    <div id='menu' className='app__specialMenu flex__center section__padding'>
      <div className='app__specialMenu-title'>
        <SubHeadingmenu title='Sweet Moments Await' />
        <h1 className="headtext__cormorant">Finest Pastry Indulgences</h1>
      </div>

      <motion.div
      variants={fadeIn('up', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_cakes flex__center'>
          <p className='app__specialMenu-menu_heading'>Cakes</p>
          <div className='app__specialMenu-menu_items'>
            {data.cakes.map((cake, index) => (
              <MenuItem key={cake.title + index} title={cake.title} price={cake.price} tags={cake.tags}/>
            ))}
          </div>
        </div>



        <div className='app__specialMenu-menu_flowerimg flex__center'>
          <img src={images.flower} alt='flower'/>
        </div>



        <div className='app__specialMenu-menu_pastry  flex__center'>
          <p className='app__specialMenu-menu_heading'>French Pastry</p>
          <div className='app__specialMenu-menu_items'>
            {data.frenchPastry.map((pastry, index) => (
              <MenuItem key={pastry.title + index} title={pastry.title} price={pastry.price} tags={pastry.tags}/>
            ))}
          </div>
        </div>
      </motion.div>

      <div style={{marginTop: 10}}>
        <button className='custom__button-menu' type='button'>View More</button>
      </div>
    </div>
  )
}

export default SpecialMenu
