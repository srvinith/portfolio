import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import Svg from '../Assets/Images/vinith-svg.png'
import Coffee from '../Assets/Images/coffe-1-gif.gif'
import MainImg from '../Assets/Images/main-img.png'
import '../Assets/Css/HeroResp.css'
import Scrolldownimg from '../Assets/Images/scrolldown-img.svg'
import sectionsvg from '../Assets/Images/section-title-svg.svg'
import Monkey from '../Assets/Images/monkey-group.png'
import Pscastel from '../Assets/Images/ps-castel.png'
import Torquee from './Torquee';


const Hero = () => {
  const zoomInRef = useRef(null);
  const imageRef = useRef(null);
  const scrollRef = useRef(null);
  const { innerHeight } = window;



  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(zoomInRef.current, {
      scale: 4,
      opacity: 1,
      stagger: 0.25,
      duration: 10,
      scrollTrigger: {
        trigger: zoomInRef.current,
        pin: true,
        end: `+=${innerHeight * 1.8}`,
        start: 'top 0%',
        scrub: true,
      },
    });
  }, [innerHeight]);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      opacity: 0,
      scale: 0.1, // Shrink to 10% of the original size
      scrollTrigger: {
        trigger: imageRef.current,
        stagger: 0.25,
        duration: 10,
        start: 'top 20%',
        end: `+=${innerHeight * 1}`,
        scrub: true,
        onEnter: () => {
          gsap.set(scrollRef.current, { display: 'none' });
        },
        onLeaveBack: () => {
          gsap.set(scrollRef.current, { display: 'block' });

        }
      },
    });
  }, [innerHeight]);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const eye = document.getElementById('eye'); // Replace with your eye element's ID
    const eyeRect = eye.getBoundingClientRect();

    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = cursorPosition.x - eyeCenterX;
    const deltaY = cursorPosition.y - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);

    const eyeX = eyeCenterX + distance * Math.cos(angle);
    const eyeY = eyeCenterY + distance * Math.sin(angle);

    eye.style.transform = `translate(${eyeX - eyeRect.left}px, ${eyeY - eyeRect.top}px)`;
  }, [cursorPosition]);

  return (
    <>

      <div className="container">
        <div className="full-main">
          <div className="scroll-down-btn" ref={scrollRef}>
            <button>Scroll Down <img src={Scrolldownimg} alt="" /></button>
          </div>
          <div className="main-img" >
            <img src={MainImg} alt="" ref={imageRef} />
          </div>
          <div className="text-main">
            <div className="inner-con" ref={zoomInRef} >
              <h3>Hey, It’s <span><img src={Svg} alt="svg" /> Vinith </span> <br />
                Front end Developer</h3>

              <p>I'm all about jamming out with code to create funky, interactive experiences. When I'm not busting out cool stuff, I'm chatting and scribbling about these far- <br />out projects. <span className="coffee-anim">
              <img src={Coffee} alt="" className='coffee' />
              </span></p>
            </div>
          </div>
        </div>
        <div className="about-con">
          <div className="container">
            <div className="section-titl-right my-3">
              <div className="sec-titl">
                <h2>About</h2>
                <span><img src={sectionsvg} alt="" className='img-fluid' /></span>
              </div>

            </div>
            <div className="row my-4">
              <div className="col-md-5">
                <div className="monkey">
                  <img src={Monkey} alt="" className='img-fluid' />
                  <span className='eye'>

                    <div className="eyess left-eye" onMouseMove={handleMouseMove}>
                      <div className="eyes" id='eye'></div>
                    </div>
                    <div className="eyess right-eye">
                      <div className="eyes"></div>
                    </div>
                  </span>

                </div>
              </div>
              <div className="col-md-7">

                <p className='about-text'>
                  I'm  a frontend web developer fueled by a passion for crafting funky and interactive digital experiences. I thrive on translating ideas into captivating visuals and seamless user interactions using a blend of HTML, CSS, and JavaScript wizardry.   My goal? To sprinkle a touch of excitement and creativity into every project, whether it's through snazzy animations, innovative interfaces, or out-of-the-box design concepts.  When I'm not coding up a storm, I'm often found discussing and brainstorming about these far-out projects. Sharing insights and bouncing ideas with like-minded enthusiasts fuels my creativity and keeps me inspired.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="work-con">
          <div className="container">
            <div className="section-titl-left my-3">
              <div className="sec-titl">
                <h2>Work</h2>
                <span><img src={sectionsvg} alt="" className='img-fluid' /></span>
              </div>

            </div>

            <div className="row my-4">
              <div className="col-md-5">
                <img src={Pscastel} alt="" className='img-fluid'/>
              </div>
              <div className="col-md-7">
                <div className="second-title">
                  <h2>PS Castel</h2>
                  <p className='work-desc'>
                  I'm  a frontend web developer fueled by a passion for crafting funky and interactive digital experiences. I thrive on translating ideas into captivating visuals and seamless user interactions using a blend of HTML, CSS, and JavaScript wizardry.   My goal? To sprinkle a touch of excitement and creativity into every project, 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="torquee">
          <div className="torquee-con">
            <Torquee />
          </div>
        </div>
    </>
  )
}

export default Hero