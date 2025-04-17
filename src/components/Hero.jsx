import React from "react";
import SciFiComp from "./Sci-fi-comp";
import Button from "./Button";
// import {motion} from 'framer-motion'
// import {styles} from '../style'
// import {computerCanvas} from './canvas'
const Hero = () => {
  return (
    <section
      id="home"
      className="mb-[-200px] w-full mt-[-200px] flex flex-col relative"
    >
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl mt-[-20px] text-lg font-light text-gray-300 text-center font-generalsans">
          Hello I am
        </p>
        <p
          className=" mt-[-30px] flex justify-center align-middle text-[240px] 
        font-bold text-transparent
               bg-clip-text bg-gradient-to-b from-white/55 to-black"
        >
          Mohit Khatri
        </p>
      </div>
      <div className="w-full h-full inset-0 absolute">
        <SciFiComp />
      </div>
      <a
        href="#contact"
        className="flex justify-center items-center mt-[-100px]"
      >
        <Button
          name="Let's work together"
          isBeam
          containerClass="sm:w-fit w-full  sm:min-w-96 "
        />
      </a>
    </section>
  );
};

export default Hero;
