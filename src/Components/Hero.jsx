import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import Svg from '../Assets/Images/vinith-svg.png'
// import Mini from '../Assets/Images/mini-monitor.svg'
import Coffee from '../Assets/Images/cup-coffe.svg'
import MainImg from '../Assets/Images/main-img.png'
import '../Assets/Css/HeroResp.css'
import Scrolldownimg from '../Assets/Images/scrolldown-img.svg'
import sectionsvg from '../Assets/Images/section-title-svg.svg'
import Monkey from '../Assets/Images/monkey-group.png'


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


  const pupils = document.querySelectorAll(".eyess .eyes");
  window.addEventListener("mousemove", (e) => {
    pupils.forEach((pupil) => {
      // get x and y postion of cursor
      var rect = pupil.getBoundingClientRect();
      var x = (e.pageX - rect.left) / 30 + "px";
      var y = (e.pageY - rect.top) / 30 + "px";
      pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
    });
  });

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

              <p>I'm all about jamming out with code to create funky, interactive experiences. When I'm not busting out cool stuff, I'm chatting and scribbling about these far- <br />out projects. <img src={Coffee} alt="" className='coffee' /></p>
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

                   <div className="eyess left-eye">
                      <div className="eyes"></div>
                   </div>
                    <div className="eyess right-eye">
                      <div className="eyes"></div>
                    </div>
                  </span>
                </div>
              </div>
              <div className="col-md-7"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero