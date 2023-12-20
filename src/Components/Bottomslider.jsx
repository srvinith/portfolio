import React, { useState, useEffect } from 'react';
import '../Assets/Css/Torquee.css'
import Tag from '../Assets/Images/tag.svg'

const BottomSlider = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition <= -100 ? 0 : prevPosition - 1));
    }, 160); // Adjust the interval based on your preference

    return () => {
      clearInterval(sliderInterval);
    };
  }, []);

  return (
    <div className="looping-slider">
      <div className="looping-content" style={{ transform: `translateX(${position}%)` }}>
        <span className='bellow-line'><img src={Tag} alt="" className='img-fluid' />
          <span className='text-stocks'> Vinith </span>
          <span className='text-opac'> Frontend </span>
          <span className='text-stocks'> developer</span>
        </span>
        <span className='bellow-line'><img src={Tag} alt="" className='bellow-line-imgs' />
          <span className='text-stocks'> Vinith </span>
          <span className='text-opac'> Frontend </span>
          <span className='text-stocks'> developer</span>
        </span>
        <span className='bellow-line'><img src={Tag} alt="" className='bellow-line-imgs' />
          <span className='text-stocks'> Vinith </span>
          <span className='text-opac'> Frontend </span>
          <span className='text-stocks'> developer</span>
        </span>
        <span className='bellow-line'><img src={Tag} alt="" className='bellow-line-imgs' />
          <span className='text-stocks'> Vinith </span>
          <span className='text-opac'> Frontend </span>
          <span className='text-stocks'> developer</span>
        </span>


      </div>
    </div>
  );
};

export default BottomSlider;
