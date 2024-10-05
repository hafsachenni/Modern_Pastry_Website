import React, { useRef, useState } from 'react';
import './Intro.css';
import {images, meal} from '../../constants';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


const Intro = () => {
  const [isvideoplaying, setIsVideoPalying] = useState(false);
  const videoRef = useRef();

  return (
    <div className='app__video'>
      <video
        ref={videoRef}
        src={meal}
        type='video/mp4'
        loop
        controls={false}
        muted
        poster={images.poster}
      />
      <div className="app__video-overlay flex__center">
        <div
          className='app__video-overlay_circle flex__center'
          onClick={() => {
            setIsVideoPalying(!isvideoplaying);
            if (isvideoplaying){
              videoRef.current.pause();
            } else {
              videoRef.current.play();
            }
          }}
        >
          {isvideoplaying ? (
            <BsPauseFill color="#fff" fontSize={30} />)
            : (<BsFillPlayFill color="#fff" fontSize={30} />)
          }

        </div>
      </div>
      
    </div>
  )
}

export default Intro
