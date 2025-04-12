import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white py-16 px-4 md:px-16"
      style={{ backgroundImage: "url('/portfolio_assets/Deep Space.jpg')" }}
    >
      <section className="min-h-screen text-white px-4 flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="sm:text-7xl text-4xl font-bold text-gray-200 text-center mb-16 bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
          Skills
        </h2>

        {/* Contact box */}
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Form */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Connect with me</h3>
            <form className="space-y-6">
              <div>
                <label for="fname" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Your Name"
                  name="fname"
                  value="John"
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 py-2 rounded-xl text-white font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="/portfolio_assets/myghibli.png"
              alt="my img"
              className="max-w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default contact;


