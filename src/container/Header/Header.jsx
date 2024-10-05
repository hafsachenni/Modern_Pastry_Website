import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Only 3 icons now
import './Header.css';

const Header = () => {
  return (
    <header className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info' style={{margin: '0rem 3rem'}}>
        <SubHeading title='Welcome to Glazed' />
        <h1 className='app__header--h1'>Discover Our Sweet Creations</h1>
        <p className='p__opensans' style={{ margin: '1rem 0' }}>
          Indulge in our delicious baked goods made with love and the finest ingredients. From cakes to pastries, there's a sweet treat for every occasion.
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.cake} alt='cake' />
      </div>

      {/* Social Media Links */}
      <div className='app__header-social'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
          <FaFacebookF />
        </a>
        <div className='line'></div>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <FaInstagram />
        </a>
        <div className='line'></div>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
          <FaTwitter />
        </a>
      </div>
    </header>
  );
};

export default Header;
