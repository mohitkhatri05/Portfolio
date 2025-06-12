

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
            <h2 className="text-[100px] sm:text-[150px] md:text-[200px] 
            font-bold text-transparent bg-clip-text bg-gradient-to-b
             from-white/30 to-black">
              Tools
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 gap-y-0.5 mt-[-100px]">
              {tools.map((tools, index) => (
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
                        src={tools.icon}
                        alt={tools.name}
                        className="h-60 w-50 object-contain"
                      />
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="text-lg font-bold text-white mb-4"
                    >
                      {tools.name}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Tech;
