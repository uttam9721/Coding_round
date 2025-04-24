import React from 'react'
import LeftSide from './LeftSide';
import Home from './Home'
import RightSide from './RightSide';

const Hero = () => {
  return (
    // <div className='styling'>
    //     <div>
    //   <LeftSide />
    //     </div>
    //     <div>
    //   <Home />
    //     </div>
    //     <div>
    //   <RightSide />
    //     </div>
    // </div>
    <div className="styling">
  <div className="left">
    <LeftSide />
  </div>
  <div className="center">
    <Home />
  </div>
  <div className="right">
    <RightSide />
  </div>
</div>

  )
}

export default Hero
