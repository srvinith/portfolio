import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from './Projects-data'
import { Link } from 'react-router-dom'


import Svg from '../Assets/Images/vinith-svg.png'
import Coffee from '../Assets/Images/cup-coffe.svg'
import MainImg from '../Assets/Images/main-img.png'
import '../Assets/Css/HeroResp.css'
import miniMonitor from '../Assets/Images/mini-monitor.svg'
import sectionsvg from '../Assets/Images/section-title-svg.svg'
import Monkey from '../Assets/Images/monkey-group.png'
import chainLeft from '../Assets/Images/chain-left-group.png'
import chainRight from '../Assets/Images/chain-right-group.png'
import scrow from '../Assets/Images/scrow.svg'
import Handocon from '../Assets/Images/hand-icon.svg'
import start from '../Assets/Images/star.svg'
import Mail from '../Assets/Images/linkedin.svg'
import Linkedin from '../Assets/Images/linkedin-1.svg'
import Github from '../Assets/Images/github.svg'
import arrow from '../Assets/Images/arrwo.svg'
import Torquee from './Torquee';
import BottomSlider from './Bottomslider'
import smoke from '../Assets/Images/smoke.png'


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

  // ============
  useEffect(() => {
    const handleMouseMove = (e) => {
      const pupils = document.querySelectorAll('.eyess .eyes');

      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const x = (e.pageX - rect.left) / 30 + 'px';
        const y = (e.pageY - rect.top) / 30 + 'px';
        pupil.style.transform = 'translate3d(' + x + ',' + y + ', 0px)';
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from('.line span', {
      duration: 1.8,
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);

  return (
    <>

      <div className="">
        <div className="container" >
          <div className="full-main" id='home'>
            <div className="scroll-down-btn" ref={scrollRef}>
              <button className='scrollbutton'>Scroll Down <img className='down-arrow-img' src={arrow} alt="" /></button>
            </div>
            <div className="main-img" >
              <img src={MainImg} alt="" ref={imageRef} />
            </div>
            <div className="text-main">
              <div className="inner-con" ref={zoomInRef} >
                <h3>Hey, It’s <span><img src={Svg} alt="svg" /> Vinith </span> <br />
                  Front end Developer</h3>

                <p >I'm all about jamming out with code to create funky, interactive experiences. When I'm not busting out cool stuff, I'm chatting and scribbling about these far- <br />out projects. <span className="coffee-anim">
                  <div class="cup-wrap">
                    <div class="cup">
                      {/* <img src={cup} alt="cup"  /> */}
                    </div>

                    <div class="smoke-wrap">
                      <img class="smoke" src={smoke} alt="smoke" />
                    </div>
                    <div class="smoke-wrap">
                      <img class="smoke2" src={smoke} alt="smoke" />
                    </div>
                    <div class="smoke-wrap">
                      <img class="smoke3" src={smoke} alt="smoke" />
                    </div>
                  </div>
                </span></p>
              </div>
            </div>
          </div>
          {/* === mobile hero section===================== */}

          <div className="mobile-hero">
            <div className="main-mob-con">
              <h3 className='text-center'>Hey, It’s <span className='name-mob'><img className='mob-name-svg' src={Svg} alt="svg" /> Vinith </span><span className='mini-monitor'><img src={miniMonitor} alt="" /></span> <br />
                Front end Developer</h3>

              <p className='main-p'>I'm all about jamming out with code to create funky, interactive experiences. When I'm not busting out cool stuff, I'm chatting and scribbling about these far- out projects. <span className="coffee-anim">
                <img src={Coffee} alt="" className='coffee' />
              </span></p>
            </div>
          </div>



          {/* === mobile hero section===================== */}
          <div className="about-con" id='about'>
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
                    <span className='eyee'>
                      <div className="eyess left-eye">
                        <div className="mob-eye"></div>
                        <div className="eyes" id='eye'></div>
                      </div>
                      <div className="eyess right-eye">
                        <div className="mob-eye"></div>
                        <div className="eyes"></div>
                      </div>
                    </span>

                  </div>
                </div>
                <div className="col-md-7">

                  <p className='about-text'>
                    <span>
                      I'm  a frontend web developer fueled by a passion for crafting funky and interactive digital experiences. I thrive on translating ideas into captivating visuals and seamless user interactions using a blend of HTML, CSS, and JavaScript wizardry.
                    </span>  My goal? To sprinkle a touch of excitement and creativity into every project, whether it's through snazzy animations, innovative interfaces, or out-of-the-box design concepts.  When I'm not coding up a storm, I'm often found discussing and brainstorming about these far-out projects. Sharing insights and bouncing ideas with like-minded enthusiasts fuels my creativity and keeps me inspired.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="work-con" id='work'>
            <div className="container">
              <div className="section-titl-left my-3">
                <div className="sec-titl project-titl">
                  <h2>Work</h2>
                  <span><img src={sectionsvg} alt="" className='img-fluid' /></span>
                </div>
              </div>
              {
                Projects.map((projectdata, i) =>
                  <div className="row my-4 main-project-con" key={i}>
                    <div className="col-md-5">
                      <img src={projectdata.img} alt={projectdata.Name} className='work-img img-fluid' />
                    </div>
                    <div className="col-md-7">
                      <div className="second-title">
                        <h2>{projectdata.Name}</h2>
                        <p className='work-desc'>
                          {projectdata.desc} <br />
                          <button className='know-more-btn'><Link to={projectdata.links} className='links-tags'>Know More</Link></button>
                        </p>
              
                      </div>
                    </div>
                  </div>
                )
              }

            </div>
          </div>
        </div>
        <div className="torquee">
          <div className="torquee-con">
            <Torquee />
          </div>
          <div className="container">
            <div className="chain-con">
              <img src={chainLeft} alt="" className='img-fluid img-1' />
              <img src={chainRight} alt="" className='img-fluid img-2' />
            </div>
            <div className="work-box-con">
              <div className="scrow">
                <img src={scrow} alt="scrow" />
                <img src={scrow} alt="scrow" />
              </div>
              <div className="list-of-skills">
                <p>React</p>
                <p>Redux</p>
                <p>Tailwind Css</p>
                <p>Saas</p>
              </div>
              <div className="list-of-skills1">
                <p>Html</p>
                <p>Css</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
              </div>
              <div className="list-of-skills">
                <p>Python</p>
                <p>DJango</p>
                <p>Bootstrap</p>
                <p>Git</p>
              </div>

            </div>
          </div>
        </div>

        <div className="about-con my-5 py-4">
          <div className="container">
            <center>
              <h3 className='think-white'>Do You think There is Lot of space in the skills set box ?</h3>
            </center>
            <center>
              <h2 className='my-5 center-tex'>Stay tuned for an exciting <br /> transformation !</h2>
            </center>
          </div>

          <div className="section-titl-right my-3" id='contact'>
            <div className="sec-titl">
              <h2>Contact</h2>
              <span><img src={sectionsvg} alt="" className='img-fluid' /></span>
            </div>
          </div>

          <div className="center-diamond">
            <span className='work-texs'>Work</span> <br /> <span className='second-texts'>With US</span>
          </div>

          <center>
            <h3>OR SAY HELLO <img src={Handocon} className='hand' alt="hello" /><img src={start} alt="" /></h3>
          </center>

          <div className="container">
            <div className="social-link">
              <Link to="https://www.linkedin.com/in/vinith-r-67a62a17a/" className="linked">
                <img src={Linkedin} alt="" /><span>Linked In</span><span><img className='arrow-right' src={arrow} alt="arrow-img" /></span>
              </Link>
              <Link to='mailto:srvinith6@gmail.com' target="_blank" className="mail">
                <img src={Mail} alt="" /><span>Email</span><span><img className='arrow-right' src={arrow} alt="arrow-img" /></span>
              </Link>
              <Link href="https://github.com/srvinith" target="_blank" className="github">
                <img src={Github} alt="" /><span>Github </span><span><img className='arrow-right' src={arrow} alt="arrow-img" /></span>
              </Link>
            </div>
          </div>

          <div className="">
            <BottomSlider />
          </div>

        </div>

        <footer>
          <div className="footer-line">
            <p>Crafted by Ganesh</p>
            <p>&copy;Copyrights 2023 Registered</p>
          </div>
          <center>
            <p className='coder'>Coded by</p>
            <p className='names coder'>Vinith R</p>
          </center>
        </footer>
      </div>

    </>
  )
}

export default Hero