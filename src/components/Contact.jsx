// import React, { useRef } from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import { motion, useInView } from "framer-motion";
// import AntiqueTelephone from "./AntiqueTelephone.jsx"; // Adjust path as needed

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const [state, handleSubmit] = useForm("mldnjdel"); // Replace with your actual Formspree ID

//   return (
//     <motion.section
//       id="contact"
//       ref={ref}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 1, ease: "easeOut" }}
//       className="text-white py-16 px-4 md:px-16"
//       style={{
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <h2 className="flex justify-center align-middle  text-[100px] sm:text-[120px] md:text-[180px] lg:[240px]

//               font-bold text-transparent mb-[-100px] bg-clip-text bg-gradient-to-b from-white/30 to-black">
//           COLLAB ?
//         </h2>

//         <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
//           {/* Left: 3D Model */}
//           <div className="flex justify-center items-center w-full h-full">
//             <div className="w-full max-w-[600px] max-h-[500px]">
//               <AntiqueTelephone />
//             </div>
//           </div>

//           {/* Right: Contact Form */}
//           <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
//             <h3 className="text-3xl font-bold mb-6">Connect with me</h3>

//             {state.succeeded ? (
//               <p className="text-white">✅ Thanks for your message!</p>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="fname" className="block text-sm font-medium mb-1">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="fname"
//                     name="fname"
//                     required
//                     placeholder="Your Name"
//                     className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20
//                       focus:outline-none focus:ring-2 focus:ring-white"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     required
//                     placeholder="you@example.com"
//                     className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20
//                       focus:outline-none focus:ring-2 focus:ring-white"
//                   />
//                   <ValidationError prefix="Email" field="email" errors={state.errors} />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows="5"
//                     placeholder="Your message..."
//                     className="w-full resize-none px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20
//                       focus:outline-none focus:ring-2 focus:ring-white"
//                   ></textarea>
//                   <ValidationError prefix="Message" field="message" errors={state.errors} />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={state.submitting}
//                   className="w-full bg-white hover:bg-white/45 transition-colors duration-200
//                     py-2 rounded-xl text-black font-semibold"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, useInView } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./ThreeDCard";

// Uncomment the line below to import your 3D model component

// import AntiqueTelephone from "./AntiqueTelephone.jsx"; // Adjust path as needed

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [state, handleSubmit] = useForm("mldnjdel"); // Replace with your actual Formspree ID

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-white py-16 px-2 sm:px-4 md:px-16"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2
          className="text-[100px] sm:text-[150px]  md:text-[200px] 
            font-bold text-transparent text-center whitespace-nowrap
             bg-clip-text bg-gradient-to-b
             from-white"
        >
          COLLAB&nbsp;?
        </h2>

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8
         sm:gap-10 items-center mt-8">
          {/* Left: 3D Model */}
          <div className="flex justify-center items-center w-full h-full md:mb-0 mb-8">
            <div className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto">
              {/* <AntiqueTelephone /> */}
              {/* 3D Animated Image Card */}
              <div className="flex justify-center items-center w-full h-full mt-[-10px]">
                <CardContainer className="inter-var w-full">
                  <CardBody
                    className="
          relative group/card dark:hover:shadow-2xl
          dark:hover:shadow-emerald-500/[0.1] dark:bg-black
          dark:border-white/[0.2] border-black/[0.1]
          w-full sm:w-full md:w-full max-w-full
          rounded-xl h-auto p-4 sm:p-6 border mx-auto"
                  >
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    ></CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    ></CardItem>
                    <CardItem
                      translateZ="100"
                      className="w-full overflow-hidden object-contain mt-4"
                    >
                      <img
                        src="/portfolio_assets/earth1.png"
                        height="1000"
                        width="1000"
                        className="w-full h-auto object-contain rounded-xl group-hover/card:shadow-xl"
                        alt="EARTH"
                      />
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="bg-white/5 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl w-full">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Connect with me
            </h3>

            {state.succeeded ? (
              <p className="text-white">✅ Thanks for your message!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
                    required
                    placeholder="Your Name"
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
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 
                      focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
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
                    required
                    rows="5"
                    placeholder="Your message..."
                    className="w-full resize-none px-4 py-2 bg-white/10 text-white rounded-xl border border-white/20 
                      focus:outline-none focus:ring-2 focus:ring-white"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-white hover:bg-white/45 transition-colors duration-200 
                    py-2 rounded-xl text-black font-semibold"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
