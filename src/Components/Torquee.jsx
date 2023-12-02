import React, { useState, useEffect } from 'react';
import '../Assets/Css/Torquee.css'
import Torqueestar from '../Assets/Images/torquue-star.svg'

const Torquee = () => {
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
          <span><img src={Torqueestar} alt="" className='img-fluid' /> "Mad  <span className='text-stock'>Skills</span> I Master Like a Jedi!"</span>
          <span><img src={Torqueestar} alt="" className='img-fluid' /> "Mad  <span className='text-stock'>Skills</span> I Master Like a Jedi!"</span>
          <span><img src={Torqueestar} alt="" className='img-fluid' /> "Mad  <span className='text-stock'>Skills</span> I Master Like a Jedi!"</span>
         
          </div>
        </div>
      );
};

export default Torquee;
