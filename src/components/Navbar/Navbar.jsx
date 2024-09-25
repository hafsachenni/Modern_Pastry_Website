import React from 'react';
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import './Navbar.css';
import { useState } from 'react';
import images from '../../constants/images';

const Navbar = () => {
    const [isopen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }

  return (
    <nav className='app__navbar'>
      <div className='app__navbar--logo'>
        <a href='/'>
            <img src={images.glazed} alt='logo' />
        </a>
      </div>
      <ul className='app__navbar--links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#menu">Menu</a></li>
        <li className='p__opensans'><a href="#awards">Awards</a></li>
        <li className='p__opensans'><a href="#contact">Contact</a></li>
      </ul>
      <div className='app__navbar--order'>
        <a href='#' className='p__opensans'>Order Online</a>
        <div />
        <a href='#' className='p__opensans'>Specials</a>
      </div>
      <div className='app__navbar--hamburgermenu'>
      <RiMenu3Fill onClick={handleOpen} color='#FADADD' fontSize={27}/>
        {isopen && (
            <div className='app__navbar--hamburgermenu__overlay flex__center slide--bottom'>
                <IoCloseOutline color="black"  fontSize={27} onClick={handleClose} className="overlay__close"/>
                <ul className='app__navbar--hamburgermenu--links'>
                <li className='p__opensans'><a href="#home">Home</a></li>
                <li className='p__opensans'><a href="#about">About</a></li>
                <li className='p__opensans'><a href="#menu">Menu</a></li>
                <li className='p__opensans'><a href="#awards">Awards</a></li>
                <li className='p__opensans'><a href="#contact">Contact</a></li>
          </ul>
            </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
