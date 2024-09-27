import React from 'react';
import {images} from '../../constants';

const SubHeadingmenu = ({title}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <p className='p__cormorant-menu'>{title}</p>
      <img src={images.borduredark} alt='bordure' className='spoon__img'/>
    </div>
  )
}

export default SubHeadingmenu
