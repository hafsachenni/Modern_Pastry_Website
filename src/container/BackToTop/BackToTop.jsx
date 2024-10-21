import React, { useMemo } from 'react';
import './BackToTop.css';
import { IoIosArrowRoundUp } from "react-icons/io";


const BackToTop = () => {
    useMemo(() => {
        let calculateScroll = ()=> {
            let scrollProgress = document.getElementById('back-to-top');
            let position = document.documentElement.scrollTop;
            let calcHeight = 
                document.documentElement.scrollHeight - 
                document.documentElement.clientHeight;
            let scrollValue = Math.round((position * 100) / calcHeight);
            if (position > 100){
                scrollProgress.style.display = 'flex';
            } else {
                scrollProgress.style.display = 'none';
            }
            scrollProgress.addEventListener('click', () => {
                document.documentElement.scrollTop = 0;
            });
            scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #22435f ${scrollValue}%)`;
        };
        window.onscroll = calculateScroll;
        window.onload = calculateScroll;
    }, []);
  return (
    <div id='back-to-top'>
        <div className='progress-value'>
            <IoIosArrowRoundUp />
        </div>
    </div>
  )
}

export default BackToTop
