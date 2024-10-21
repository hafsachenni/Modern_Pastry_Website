import React from 'react';
import './Laurels.css';
import {SubHeadingmenu} from '../../components';
import { images, data } from '../../constants';
import { GiLaurelCrown } from "react-icons/gi";
import {motion} from 'framer-motion';
import {fadeIn} from '../../utils/animations';



const AwardCard = ({award: {title, subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <GiLaurelCrown style={{color: 'gray'}} className='app__laurels_awards-card_icons'/>

    <div className='app__laurels_awards-card_content'>
      <p className="p__cormorant" style={{color: '#22435f'}} >{title}</p>
      <p className="p__opensans" style={{color: 'black'}}>{subtitle}</p>
    </div>

  </div>
)


const Laurels = () => {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <motion.div
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='app__wrapper_info'>
        <SubHeadingmenu title='Awards & recognition'/> 
        <h1 className='headtext__cormorant' style={{color: '#22435f'}}>Our Laurels</h1>


        <div className='app__laurels_awards'>
          {data.awards.map((award) =>
            <AwardCard award={award} key={award.title} />
          )}

        </div>
      </motion.div>
      <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels' style={{borderTopLeftRadius: '120px', borderBottomRightRadius: '120px'}}/>
      </motion.div>
      
    </div>
  )
}

export default Laurels
