import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Ensure this is stable

  const handleSubmit = (e) => {
    console.log("Form submitted!");
    e.preventDefault(); // Prevents page reload

    const form = e.target;
    const name = form.fname.value;
    const email = form.email.value;
    const message = form.message.value;

    // Log form data (or send to a backend)
    console.log("Form Submitted:", { name, email, message });

    // Optional: Alert or toast
    alert("Message Sent! ✅");

    // Reset form (optional)
    form.reset();
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Prevent unnecessary re-renders
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white py-16 px-4 md:px-16"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen text-white px-4 flex flex-col items-center justify-center">
        {/* Heading */}
        <h2
          className="flex justify-center align-middle text-[240px] font-bold text-transparent
               bg-clip-text bg-gradient-to-b from-white/30 to-black"
        >
          COLLAB ?
        </h2>

        {/* Contact box */}
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center items-center">
            <img
              src="/portfolio_assets/myghibli.png"
              alt="my img"
              className="max-w-full rounded-2xl shadow-xl"
            />
          </div>
          {/* Form */}

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">Connect with me</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fname"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 
                  focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 
                  focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows="5"
                  required
                  className="w-full resize-none px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 
                  focus:outline-none focus:ring-2 focus:ring-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white hover:bg-white/45 transition-colors duration-200 
                py-2 rounded-xl text-black font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image */}
       
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
