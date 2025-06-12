import React from "react";
// import SciFiComp from "./Sci-fi-comp";
import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col w-full mb-[-80px] mt-[-80px] sm:mb-[-200px] sm:mt-[-200px] overflow-hidden"
    >
      <div className="w-full mx-auto flex flex-col gap-3 
      sm:mt-36 mt-20 px-4">
        <p className="flex justify-center items-center text-lg 
        sm:text-3xl font-light text-gray-300 text-center 
        font-generalsans mt-[-10px] sm:mt-[-20px]">
          <span className="hand-wave text-2xl sm:text-3xl">👋</span>
          <span className="ml-2">Hello I am</span>
        </p>
        <p
          className="
            flex justify-center items-center
            font-bold text-transparent bg-clip-text bg-gradient-to-b 
            from-white 
            font-generalsans
            text-[100px] xs:text-[64px] sm:text-[150px] md:text-[200px] 
            lg:text-[230px]
            leading-none text-center 
            break-words
          "
        >
          Mohit Khatri
        </p>
      </div>
      <div className="w-full h-full inset-0 absolute pointer-events-none">
        {/* <SciFiComp /> */}
      </div>
<div className="mt-6 md:mt-[-180px]">
                <a href="#contact">
                  <Button
                    name="Let’s Connect !"
                    isBeam
                    containerClass="w-full  sm:w-fit sm:min-w-96"
                  />
                </a>
              </div>
    </section>
  );
};

export default Hero;



