"use client";
import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
// import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-full bg-gradient-conic
           from-sky-400 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-full h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "20rem" }}
          whileInView={{ opacity: 1, width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[90rem] bg-gradient-conic from-transparent via-transparent to-sky-400 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-56 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-56 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-full w-[46rem] -translate-y-1/2 rounded-full bg-sky-400 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "20rem" }}
          whileInView={{ width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-66 w-full -translate-y-[9rem] rounded-full bg-sky-400 blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ width: "20rem" }}
          whileInView={{ width: "40rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        //   className="absolute inset-auto z-50 h-9 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>
        <div className="absolute inset-auto z-40 h-45 w-full -translate-y-[12.5rem] bg-black"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center  px-8 mt-[500px]">
        {children}
      </div>
    </div>
  );
};
