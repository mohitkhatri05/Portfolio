import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

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
        <section className="text-white py-16 px-4 md:px-16">
          <div className="max-w-6xl mx-auto mt-10 text-center">
            <h2
              className="flex justify-center align-middle text-[240px] font-bold text-transparent
               bg-clip-text bg-gradient-to-b from-white/55 to-black"
            >
              Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-purple-500/30 
                  transition-shadow duration-300"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-16 h-16 mb-4"
                  />
                  <p className="text-lg font-semibold text-gray-100">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-6xl mx-auto text-center mt-16">
            <h2
              className="flex justify-center align-middle text-[240px] font-bold text-transparent
               bg-clip-text bg-gradient-to-b from-white/55 to-black"
            >
              Tools
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  id="tech"
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center shadow-md 
                  hover:shadow-purple-500/30 transition-shadow duration-300"
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-16 h-16 mb-4"
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
