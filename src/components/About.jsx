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
               bg-clip-text bg-gradient-to-b from-white/55 to-black"
            >
              ABOUT ME
            </p>
          </div>

          <div className="max-w-7xl grid  md:grid-cols-2 gap-12 mt-[-120px] items-center">
            <div className="">
              <p className="text-xl font-bold  text-blue-50">Hey there! I’m </p>
              <h2 className="text-5xl font-bold text-blue-100">
                <span className="block text-blue-200">MOHIT KHATRI,</span>
              </h2>
              <p className="text-xl font-bold text-blue-50">
                a Frontend Developer and a fresh face in the tech world. I’ve
                built cool projects using HTML, CSS, JavaScript, React.js,
                Tailwind CSS, and more.
              </p>
              <p className="text-xl font-bold text-blue-50">
                Love clean designs, responsive layouts, and learning something
                new every day. Let’s build something awesome together!
              </p>
              <div className="mt-[]">
                <a href="#contact" className="">
                  <Button
                    className=""
                    name="Let's work together"
                    isBeam
                    containerClass="sm:w-fit w-full sm:min-w-96 "
                  />
                </a>
              </div>
            </div>

            {/* 3D Animated Image Card */}
            <CardContainer className="inter-var">
              <CardBody
                className="bg-gray-50 relative group/card  dark:hover:shadow-2xl
       dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] 
       h-auto rounded-xl p-6 border  "
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  Make things float in air
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem
                  translateZ="100"
                  className="w-full object-contain overflow-hidden mt-4"
                >
                  <img
                    src="/portfolio_assets/myghibli.png"
                    height="1000"
                    width="1000"
                    className="h-100 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href="https://twitter.com/mannupaaji"
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
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
