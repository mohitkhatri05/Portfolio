// import React from "react";
// import SciFiComp from "./Sci-fi-comp";
// import Button from "./Button";


// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="mb-[-200px] w-full mt-[-200px] flex flex-col relative"
//     >
//       <div className="w-full mx-auto flex flex-col sm:mt-36  mt-20 c-space gap-3">
      
//         <p className="sm:text-3xl mt-[-20px] flex justify-center items-center text-lg font-light text-gray-300 text-center font-generalsans">
//         <span className="hand-wave text-3xl">👋</span>
//           Hello I am
//         </p>
//         <p
//           className=" mt-[-30px] flex justify-center align-middle text-[240px] 
//         font-bold text-transparent
//                bg-clip-text bg-gradient-to-b from-white/55 to-black"
//         >
//           Mohit Khatri
//         </p>
       
//       </div>
//       <div className="w-full h-full inset-0 absolute">
//         <SciFiComp />
//       </div>
//       <a
//         href="#contact"
//         className="flex justify-center items-center mt-[-150px]"
//       >
//         <Button
//           name="Let's Talk"
//           isBeam
//           containerClass="sm:w-fit w-full  sm:min-w-96 "
//         />
//       </a>
//     </section>
//   );
// };

// export default Hero;


import React from "react";
import SciFiComp from "./Sci-fi-comp";
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
            from-white/70 to-black
            font-generalsans
            text-[48px] xs:text-[64px] sm:text-[120px] md:text-[180px] 
            lg:text-[230px]
            leading-none text-center 
            break-words
          "
        >
          Mohit Khatri
        </p>
      </div>
      <div className="w-full h-full inset-0 absolute pointer-events-none">
        <SciFiComp />
      </div>
      <a
        href="#contact"
        className="flex justify-center items-center mt-[-60px] 
        sm:mt-[-150px] z-10"
      >
        <Button
          name="Let's Talk"
          isBeam
          containerClass="w-full mt-24 sm:w-fit sm:min-w-96"
        />
      </a>
    </section>
  );
};

export default Hero;



