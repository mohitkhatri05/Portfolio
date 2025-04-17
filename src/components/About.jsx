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
        className="text-white   px-4 md:px-16"
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

          <div className="max-w-7xl grid md:grid-cols-2 gap-10  items-center">
            <div className="space-y-6 ">
              <p className="text-xl font-bold mt-30 text-blue-50">
                Hey there! I’m{" "}
              </p>
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
              <div className="mt-[-200px]">
                <a href="#contact" className="">
                  <Button
                    className=""
                    name="Let's work together"
                    isBeam
                    containerClass="sm:w-fit w-full  sm:min-w-96 "
                  />
                </a>
              </div>
            </div>

            {/* 3D Animated Image Card */}
            <CardContainer className="card-container">
              <CardBody className="card-body">
                <CardItem>
                  <img
                    src="/portfolio_assets/myghibli.png"
                    alt="Profile"
                    className="rounded-xl w-full h-full object-cover shadow-lg"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </section>
      </motion.section>
    </div>
  );
};

export default About;
