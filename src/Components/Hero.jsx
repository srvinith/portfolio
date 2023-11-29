import React from 'react'
import Svg from '../Assets/Images/vinith-svg.png'
import Mini from '../Assets/Images/mini-monitor.svg'
import Coffee from '../Assets/Images/cup-coffe.svg'
import MainImg from '../Assets/Images/main-img.png'


const Hero = () => {
  return (
    <>

      <div className="container">
        <div className="main-img">
          <img src={MainImg} alt="" />
        </div>
        <div className="inner-con">
          <h3>Hey, It’s <span><img src={Svg} alt="svg" /> Vinith </span><img src={Mini} alt="" /> <br />
            Front end Developer</h3>

            <p>I'm all about jamming out with code to create funky, interactive experiences. When I'm not busting out cool stuff, I'm chatting and scribbling about these far- <br />out projects. <img src={Coffee} alt="" /></p>
        </div>
      </div>
    </>
  )
}

export default Hero