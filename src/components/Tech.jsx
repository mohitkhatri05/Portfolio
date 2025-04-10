import React,{useRef} from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const techStack = [
  { name: "Vue.js", icon: "/icons/vue.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
];

const tools = [
  { name: "Git", icon: "/icons/git.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
];

const Tech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div style={{ backgroundImage: "url('/portfolio_assets/Deep Space.jpg')" }}>
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
            <h2 className="sm:text-9xl text-xl font-bold text-gray-200 text-center font-stretch-ultra-expanded 
            bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight ">
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
            <h2 className="sm:text-9xl text-xl font-bold text-gray-200 text-center font-stretch-ultra-expanded 
            bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
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
