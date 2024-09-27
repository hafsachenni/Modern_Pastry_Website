import React from 'react';
import './MenuItem.css';

const MenuItem = ({title, price, tags}) => {
  return (
    <div className='app__menuitem'>
      <div className='app__menuitem-head'>
        <div className='app__menuitem-name'>
          <p className='p__cormorant' style={{color: 'black'}}>{title}</p>
        </div>
        <div className='app__menuitem-dash'/>
          <div className='app__menuitem-price'>
            <p className='p__cormorant' style={{color: 'black'}}>{price}</p>
          </div>
      </div>

        <div className='app__menuitem-tags'>
          <p className='p__opensans' style={{color: '#727a8a'}}>{tags}</p>
        </div>
      </div>
  )
}

export default MenuItem
