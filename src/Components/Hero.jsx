import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Svg from '../Assets/Images/vinith-svg.png'
import Mini from '../Assets/Images/mini-monitor.svg'
import Coffee from '../Assets/Images/cup-coffe.svg'
import MainImg from '../Assets/Images/main-img.png'
import '../Assets/Css/HeroResp.css'


const Hero = () => {
  const zoomInRef = useRef(null);
  const imageRef = useRef(null);
  const { innerHeight } = window;

  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(zoomInRef.current, {
      scale: 4,
      stagger: 0.25,
      duration: 10,
      scrollTrigger: {
        trigger: zoomInRef.current,
        pin: true,
        start: 'right center',
        end: 'right center',
        scrub: true,
      },
    });
  }, [innerHeight]);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      scale: 0.1, // Shrink to 10% of the original size
      scrollTrigger: {
        trigger: imageRef.current,
        duration: 10,
        start: 'right center',
        end: 'right center',
        scrub: true,
        opacity:0
      },
    });
  }, []);
 
  return (
    <>

      <div className="container">
      <div className="full-main">
      <div className="main-img" >
          <img src={MainImg} alt="" ref={imageRef}/>
        </div>
       <div className="text-main">
       <div className="inner-con" ref={zoomInRef} >
          <h3>Hey, It’s <span><img src={Svg} alt="svg" /> Vinith </span><img src={Mini} alt="" /> <br />
            Front end Developer</h3>

            <p>I'm all about jamming out with code to create funky, interactive experiences. When I'm not busting out cool stuff, I'm chatting and scribbling about these far- <br />out projects. <img src={Coffee} alt="" /></p>
        </div>
       </div>
      </div>
      </div>
    </>
  )
}

export default Hero