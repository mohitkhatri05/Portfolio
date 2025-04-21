"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ThreeDCard"; // Update path as needed
import Button from "./Button"; // Update path as needed

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div>
      <motion.section
        id="about"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.9, ease: "easeOut" }}
        className="text-white px-4 md:px-16"
      >
        <section className="text-white px-4 md:px-18 mt-[-20px]">
          <div>
            <p
              className=" flex justify-center align-middle text-[240px] font-bold text-transparent
               bg-clip-text bg-gradient-to-b from-white/30 to-black"
            >
              ABOUT ME
            </p>
          </div>

          <div className="max-w-7xl grid   md:grid-cols-2 gap-10 mt-[-120px]
           items-center">
            <div className="mt-[-40px]">
              <p className="text-xl mb-4 text-blue-50">Hey there! I’m </p>
              <h2 className="text-5xl font-bold ">
                <span className="block mb-4 text-white">MOHIT KHATRI,</span>
              </h2>
              <p className="   mb-4 text-white ">
              I’m a passionate Frontend Developer and a fresh face in the tech world, building creative and responsive projects using HTML, CSS, JavaScript, React.js, and Tailwind CSS.
              </p>
              <p className="  mb-4 text-white">
              I thrive on crafting clean designs, intuitive user experiences, and learning something new every day. Let’s bring ideas to life and build something amazing together!
              </p>
              <p className=" text-white">
              Let’s team up and build something awesome—be it a project, a website, or just geeking out on design and code!
              </p>
              <div className="mt-[-100px]">
                <a href="#contact" className="">
                  <Button
                    className=""
                    name="Let’s Connect !"
                    isBeam
                    containerClass="sm:w-fit w-full sm:min-w-96 "
                  />
                </a>
              </div>
            </div>

            {/* 3D Animated Image Card */}
            <CardContainer className="inter-var   ">
              <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl
       dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] 
     rounded-xl h-150 p-6 border   "
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                 
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                 
                </CardItem>
                <CardItem
                  translateZ="100"
                  className="w-full h-120 object-contain overflow-hidden mt-4"
                >
                  <img
                    src="/portfolio_assets/myghibli.png"
                    height="1000"
                    width="1000"
                    className="h-[600px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  {/* <CardItem
                    translateZ={20}
                    as="a"
                    href="https://www.facebook.com"
                    target="__blank"
                    className="px-4 py-2 rounded-xl  text-white text-xs font-bold flex items-center"
                  >
                    <img
                      src="/portfolio_assets/github.svg"
                      alt=""
                      height="50"
                      width="50"
                      className="mr-2"
                    />
                    
                  </CardItem> */}
                 
                    
                
                  {/* <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem> */}
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </section>
      </motion.section>
    </div>
  );
};

export default About;
// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { CardContainer, CardBody, CardItem } from "@/components/ThreeDCard";
// import Button from "./Button";

// const About = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });

//   // Smooth scroll-based transformations
//   const aboutOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);
//   const aboutTranslateY = useTransform(scrollYProgress, [0, 1], [0, -100]);

//   const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
//   const cardTranslateY = useTransform(scrollYProgress, [0, 1], [100, 0]);

//   return (
//     <div ref={targetRef} className="relative z-10 min-h-screen">
//       <motion.section
//         style={{ opacity: aboutOpacity, y: aboutTranslateY }}
//         className="text-white px-4 md:px-16"
//       >
//         <div>
//           <p
//             className="flex justify-center align-middle text-[240px] font-bold text-transparent
//             bg-clip-text bg-gradient-to-b from-white/30 to-black"
//           >
//             ABOUT ME
//           </p>
//         </div>

//         <div className="max-w-7xl grid md:grid-cols-2 gap-12 -mt-32 items-center">
//           <div>
//             <p className="text-xl font-bold text-blue-50">Hey there! I’m</p>
//             <h2 className="text-5xl font-bold text-blue-100">
//               <span className="block text-blue-200">MOHIT KHATRI,</span>
//             </h2>
//             <p className="text-xl font-bold text-blue-50">
//               a Frontend Developer and a fresh face in the tech world. I’ve built cool projects using HTML, CSS, JavaScript, React.js, Tailwind CSS, and more.
//             </p>
//             <p className="text-xl font-bold text-blue-50">
//               Love clean designs, responsive layouts, and learning something new every day. Let’s build something awesome together!
//             </p>
//             <div className="mt-6">
//               <a href="#contact">
//                 <Button
//                   name="Let's work together"
//                   isBeam
//                   containerClass="sm:w-fit w-full sm:min-w-96"
//                 />
//               </a>
//             </div>
//           </div>

//           <motion.div style={{ opacity: cardOpacity, y: cardTranslateY }}>
//             <CardContainer className="inter-var">
//               <CardBody
//                 className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] 
//                 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
//               >
//                 <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
//                   Make things float in air
//                 </CardItem>
//                 <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
//                   Hover over this card to unleash the power of CSS perspective
//                 </CardItem>
//                 <CardItem translateZ="100" className="w-full object-contain overflow-hidden mt-4">
//                   <img
//                     src="/portfolio_assets/myghibli.png"
//                     height="1000"
//                     width="1000"
//                     className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                     alt="thumbnail"
//                   />
//                 </CardItem>
//                 <div className="flex justify-between items-center mt-20">
//                   <CardItem
//                     translateZ={20}
//                     as="a"
//                     href="https://twitter.com/mannupaaji"
//                     target="__blank"
//                     className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
//                   >
//                     Try now →
//                   </CardItem>
//                   <CardItem
//                     translateZ={20}
//                     as="button"
//                     className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//                   >
//                     Sign up
//                   </CardItem>
//                 </div>
//               </CardBody>
//             </CardContainer>
//           </motion.div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default About;
