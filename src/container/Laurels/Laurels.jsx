import React from 'react';
import './Laurels.css';
import {SubHeadingmenu} from '../../components';
import { images, data } from '../../constants';
import { GiLaurelCrown } from "react-icons/gi";



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
      <div className='app__wrapper_info'>
        <SubHeadingmenu title='Awards & recognition'/> 
        <h1 className='headtext__cormorant' style={{color: '#22435f'}}>Our Laurels</h1>


        <div className='app__laurels_awards'>
          {data.awards.map((award) =>
            <AwardCard award={award} key={award.title} />
          )}

        </div>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels'/>

      </div>
      
    </div>
  )
}

export default Laurels
