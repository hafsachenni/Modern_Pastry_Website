import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeadingmenu } from '../../components';
import { images } from '../../constants';
import './Gallery.css';
import {fadeIn} from '../../utils/animations';
import {motion} from 'framer-motion';

const Gallery = () => {
  const scrollRfrc = useRef(null);
  const scroll = (direction) => {
    if (direction === 'left'){
      scrollRfrc.current.scrollLeft -= 300;
    } else {
      scrollRfrc.current.scrollLeft += 300;
    }
  }



  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeadingmenu title='Instagram'/>
        <h1 className='headtext__cormorant' style={{color: '#22435f'}}>Photo Gallery</h1>
        <p className='p__opensans' style={{color: 'black', marginTop: '2rem'}}>Explore the beauty of our baked goods captured in stunning photos. Each creation tells a story of craftsmanship, quality ingredients, and passion.</p>
        <button type='button' className='custom__button-bg' style={{background: '#cab8a9', color: 'white'}}>View more</button>
      </div>
      <motion.div
      variants={fadeIn('left', 0.2)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRfrc}>
          {[images.gallery2, images.gallery4, images.gallery1, images.gallery3].map((image, index) => (
            <a href='https://www.instagram.com/pastrycultureca/' target='_blank'>
            <div className='app__gallery-images_card flex__center' key={index + 1}>
              <img src={image} alt='gallery imgs'/>
              <BsInstagram className="gallery__image-icon" />
            </div>
            </a>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>

      </motion.div>

    </div>
  )
}

export default Gallery
