import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Msgbox.css';

const Msgbox = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title='NewsLetter' />
        <h1 className="headtext__cormorant" style={{color: 'white'}}>Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type='email' placeholder='Enter your email address'/>
        <button type="button" className="custom__button-bg" style={{background: '#FEE4F1', color: 'black'}}>Subscribe</button>
      </div>
      
    </div>
  )
}

export default Msgbox
