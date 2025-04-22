// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { Link } from "react-router-dom";
// import { CardContainer, CardBody, CardItem } from "@/components/ThreeDCard";



// const techStack = [
//   { name: "Html", icon: "/portfolio_assets/html-5.svg" },
//   { name: "Css", icon: "/portfolio_assets/css3.svg" },
//   { name: "Tailwind Css", icon: "/portfolio_assets/tailwind-css.svg" },
//   { name: "JavaScript", icon: "/portfolio_assets/javascript.svg" },
//   { name: "React.js", icon: "/portfolio_assets/react.svg" },
//   { name: "Programming In C", icon: "/portfolio_assets/c-programming.svg" },
// ];

// const tools = [
//   { name: "Git", icon: "/portfolio_assets/git.svg" },
//   { name: "Github", icon: "/portfolio_assets/github.svg" },
//   { name: "VS Code", icon: "/portfolio_assets/vs-code.svg" },
// ];

// const Tech = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <div>
//       <motion.div
//         id="tech"
//         ref={ref}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="max-w-6xl mx-auto text-center"
//       >
//         <section className="text-white  px-4 md:px-16">
//           <div className="max-w-6xl mx-auto mt-10 text-center">
//             <h2
//               className="flex justify-center align-middle text-[240px] font-bold text-transparent
//                bg-clip-text bg-gradient-to-b from-white/30 to-black"
//             >
//               Skills
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {techStack.map((tech, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-purple-500/30 
//                   transition-shadow duration-300"
//                 >
//                   <CardContainer className="inter-var   ">
//                                 <CardBody
//                                   className="bg-gray-50 relative group/card  dark:hover:shadow-2xl
//                          dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] 
//                        rounded-xl h-150 p-6 border   "
//                                 >
//                                   <CardItem
//                                     translateZ="50"
//                                     className="text-xl font-bold text-neutral-600 dark:text-white"
//                                   ></CardItem>
//                                   <CardItem
//                                     as="p"
//                                     translateZ="60"
//                                     className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                                   ></CardItem>
//                                   <CardItem
//                                     translateZ="100"
//                                     className="w-full h-120 object-contain overflow-hidden mt-4"
//                                   >
//                                     <img
//                                       src="/portfolio_assets/react.svg"
//                                       height="1000"
//                                       width="1000"
//                                       className="h-[600px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                                       alt="thumbnail"
//                                     />
//                                   </CardItem>
//                                   <div className="flex justify-between items-center mt-20">
//                                     {/* <CardItem
//                                       translateZ={20}
//                                       as="a"
//                                       href="https://www.facebook.com"
//                                       target="__blank"
//                                       className="px-4 py-2 rounded-xl  text-white text-xs font-bold flex items-center"
//                                     >
//                                       <img
//                                         src="/portfolio_assets/github.svg"
//                                         alt=""
//                                         height="50"
//                                         width="50"
//                                         className="mr-2"
//                                       />
                                      
//                                     </CardItem> */}
                  
//                                     {/* <CardItem
//                                       translateZ={20}
//                                       as="button"
//                                       className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//                                     >
//                                       Sign up
//                                     </CardItem> */}
//                                   </div>
//                                 </CardBody>
//                               </CardContainer>
//                   <img
//                     src={tech.icon}
//                     alt={tech.name}
//                     className="w-50 h-50 mb-4"
//                   />
//                   <p className="text-lg font-semibold text-gray-100">
//                     {tech.name}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="max-w-6xl mx-auto text-center mt-16">
//             <h2
//               className="flex justify-center align-middle text-[240px] font-bold text-transparent
//                bg-clip-text bg-gradient-to-b from-white/55 to-black"
//             >
//               Tools
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {tools.map((tool, index) => (
//                 <motion.div
//                   id="tech"
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ delay: index * 0.15, duration: 0.6 }}
//                   className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-md 
//                   hover:shadow-purple-500/30 transition-shadow duration-300"
//                 >
//                   <img
//                     src={tool.icon}
//                     alt={tool.name}
//                     className="w-16 h-16 mb-4"
//                   />
//                   <p className="text-lg font-semibold text-gray-100">
//                     {tool.name}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </motion.div>
//     </div>
//   );
// };

// export default Tech;




import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ThreeDCard";

const techStack = [
  { name: "Html", icon: "/portfolio_assets/html-5.svg" },
  { name: "Css", icon: "/portfolio_assets/css3.svg" },
  { name: "Tailwind Css", icon: "/portfolio_assets/tailwind-css.svg" },
  { name: "JavaScript", icon: "/portfolio_assets/javascript.svg" },
  { name: "React.js", icon: "/portfolio_assets/react.svg" },
  { name: "Programming In C", icon: "/portfolio_assets/c-programming.svg" },
];

const tools = [
  { name: "Git", icon: "/portfolio_assets/git.svg" },
  { name: "Github", icon: "/portfolio_assets/github.svg" },
  { name: "VS Code", icon: "/portfolio_assets/vs-code.svg" },
];

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div>
      <motion.div
        id="tech"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center"
      >
        <section className="text-white px-4 md:px-16">
          {/* Tech Stack Section */}
          <div className="">
            <h2 className="text-[100px] sm:text-[150px] md:text-[200px] 
            font-bold text-transparent bg-clip-text bg-gradient-to-b
             from-white/30 to-black ">
              Skills
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-0.5 mt-[-100px]">
              {techStack.map((tech, index) => (
                <CardContainer key={index} className="inter-var">
                  <CardBody className="bg-gray-900 rounded-xl border
                   border-white/10 p-8 w-full h-[300px] flex flex-col 
                   items-center justify-center hover:shadow-lg transition-all
                    duration-300">
                   
                    <CardItem
                      translateZ="100"
                      className="w-full flex justify-center"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-60 w-50 object-contain"
                      />
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-lg font-bold text-white mb-4"
                    >
                      {tech.name}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div className="mt-24">
            <h2 className="text-[100px] sm:text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/55 to-black mb-12">
              Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-purple-500/30 transition-shadow duration-300"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-20 h-20 mb-4 object-contain"
                  />
                  <p className="text-lg font-semibold text-gray-100">
                    {tool.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Tech;
