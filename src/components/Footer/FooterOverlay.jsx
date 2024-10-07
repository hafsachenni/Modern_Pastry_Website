import React from 'react';
import './FooterOverlay.css';


const FooterOverlay = () => {
  return (
    <div className='app__footerOverlay'>
      <div className="app__footerOverlay-black" />
      <div className="app__footerOverlay-img app__bg" style={{background: 'black'}} />
    </div>
  )
}

export default FooterOverlay
