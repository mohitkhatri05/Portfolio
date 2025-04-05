import React from 'react'
import SciFiComp from './sci-fi-comp';
// import {motion} from 'framer-motion'
// import {styles} from '../style'
// import {computerCanvas} from './canvas'
const Hero = () => {
  return (
<section
      className="min-h-screen w-full flex flex-col relative"
      style={{ backgroundImage: "url('/portfolio_assets/Deep Space.jpg')" }}
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-lg font-light text-gray-300 text-center font-generalsans">
          Hello I am
        </p>
        <p className="sm:text-9xl text-xl font-bold text-gray-200 text-center font-stretch-ultra-expanded">
          Mohit Khatri
        </p>
      </div>
      <div className="w-full h-full inset-0 absolute">
        <SciFiComp />
      </div>
    </section>
  )
}

export default Hero
