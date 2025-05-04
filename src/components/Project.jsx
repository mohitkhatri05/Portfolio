// import React, { useRef } from "react";
// import { FaArrowLeft, FaArrowRight, FaCode } from "react-icons/fa";

// const projects = [
//   {
//     title: "Sharkie",
//     tags: ["JavaScript", "HTML", "CSS"],
//     description: "JavaScript based jump-and-run game",
//     image: "/projects/sharkie.png",
//     live: "#",
//     code: "#"
//   },
//   {
//     title: "Sharkie",
//     tags: ["JavaScript", "HTML", "CSS"],
//     description: "JavaScript based jump-and-run game",
//     image: "/projects/sharkie.png",
//     live: "#",
//     code: "#"
//   },
//   {
//     title: "Sharkie",
//     tags: ["JavaScript", "HTML", "CSS"],
//     description: "JavaScript based jump-and-run game",
//     image: "/projects/sharkie.png",
//     live: "#",
//     code: "#"
//   },
//   {
//     title: "Sharkie",
//     tags: ["JavaScript", "HTML", "CSS"],
//     description: "JavaScript based jump-and-run game",
//     image: "/projects/sharkie.png",
//     live: "#",
//     code: "#"
//   },
//   {
//     title: "Sharkie",
//     tags: ["JavaScript", "HTML", "CSS"],
//     description: "JavaScript based jump-and-run game",
//     image: "/projects/sharkie.png",
//     live: "#",
//     code: "#"
//   },

//   {
//     title: "Sharkie",
//     tags: ["JavaScript", "HTML", "CSS"],
//     description: "JavaScript based jump-and-run game",
//     image: "/projects/sharkie.png",
//     live: "#",
//     code: "#"
//   },
//   {
//     title: "Sharkie",
//     tags: ["JavaScript", "HTML", "CSS"],
//     description: "JavaScript based jump-and-run game",
//     image: "/projects/sharkie.png",
//     live: "#",
//     code: "#"
//   },
//   {
//     title: "Pokedex",
//     tags: ["JavaScript", "API", "HTML", "CSS"],
//     description: "All 898 Pokémon description & stats",
//     image: "/projects/pokedex.png",
//     live: "#",
//     code: "#"
//   },
//   {
//     title: "Portfolio 2022",
//     tags: ["WebGL", "JavaScript", "HTML", "CSS"],
//     description: "My 3D interactive portfolio",
//     image: "/projects/portfolio2022.png",
//     live: "#",
//     code: "#"
//   },
//   // Add more as needed
// ];

// const project = () => {
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };
//   return (
//     <section className=" py-16 px-4" style={{backgroundImage: "url('/portfolio_assets/Deep Space.jpg')"}}>
//     <h2 className="sm:text-9xl text-xl font-bold text-gray-200 text-center
//        font-stretch-ultra-expanded bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
//       Projects
//     </h2>

//     <div className="relative">
//       <div
//         ref={scrollRef}
//         className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 snap-x"
//       >
//         {projects.map((project, idx) => (
//           <div
//             key={idx}
//             className="flex-shrink-0 w-[300px] bg-white rounded-2xl shadow-md p-4 snap-center transition hover:shadow-xl"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="rounded-xl h-40 object-cover mb-4"
//             />
//             <h3 className="text-xl font-semibold text-[#111]">{project.title}</h3>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {project.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-[#e0e0e0] text-sm px-2 py-1 rounded-full text-gray-700"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <p className="text-sm mt-3 text-gray-600">{project.description}</p>

//             <div className="flex justify-between mt-4">
//               <a
//                 href={project.code}
//                 className="text-sm flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300 transition"
//               >
//                 <FaCode />
//               </a>
//               <a
//                 href={project.live}
//                 className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold transition"
//               >
//                 Live View
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
//         <button
//           onClick={() => scroll("left")}
//           className="bg-amber-500 border p-2 rounded-full shadow hover:bg-amber-950 transition cursor-pointer"
//         >
//           <FaArrowLeft />
//         </button>
//       </div>
//       <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
//         <button
//           onClick={() => scroll("right")}
//           className="bg-amber-500 border p-2 rounded-full shadow hover:bg-amber-950 transition cursor-pointer"
//         >
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   </section>

//   )
// }

// export default project
// import React, { useRef } from "react";
// import { FaArrowLeft, FaArrowRight, FaCode } from "react-icons/fa";
// import { motion, useInView } from "framer-motion";

// const projects = [
//   {
//     title: "Sharkie",
//     tags: ["JavaScript", "HTML", "CSS"],
//     description: "JavaScript based jump-and-run game",
//     image: "/projects/sharkie.png",
//     live: "#",
//     code: "#",
//   },
//   // Add other projects as needed...
//   {
//     title: "Pokedex",
//     tags: ["JavaScript", "API", "HTML", "CSS"],
//     description: "All 898 Pokémon description & stats",
//     image: "/projects/pokedex.png",
//     live: "#",
//     code: "#",
//   },
//   {
//     title: "Pokedex",
//     tags: ["JavaScript", "API", "HTML", "CSS"],
//     description: "All 898 Pokémon description & stats",
//     image: "/projects/pokedex.png",
//     live: "#",
//     code: "#",
//   },
//   {
//     title: "Pokedex",
//     tags: ["JavaScript", "API", "HTML", "CSS"],
//     description: "All 898 Pokémon description & stats",
//     image: "/projects/pokedex.png",
//     live: "#",
//     code: "#",
//   },
//   {
//     title: "Pokedex",
//     tags: ["JavaScript", "API", "HTML", "CSS"],
//     description: "All 898 Pokémon description & stats",
//     image: "/projects/pokedex.png",
//     live: "#",
//     code: "#",
//   },

//   {
//     title: "Portfolio 2022",
//     tags: ["WebGL", "JavaScript", "HTML", "CSS"],
//     description: "My 3D interactive portfolio",
//     image: "/projects/portfolio2022.png",
//     live: "#",
//     code: "#",
//   },
//   {
//     title: "Portfolio 2022",
//     tags: ["WebGL", "JavaScript", "HTML", "CSS"],
//     description: "My 3D interactive portfolio",
//     image: "/projects/portfolio2022.png",
//     live: "#",
//     code: "#",
//   },
//   {
//     title: "Portfolio 2022",
//     tags: ["WebGL", "JavaScript", "HTML", "CSS"],
//     description: "My 3D interactive portfolio",
//     image: "/projects/portfolio2022.png",
//     live: "#",
//     code: "#",
//   },
// ];

// const Project = () => {
//   const scrollRef = useRef(null);
//   const cardRefs = useRef([]);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === "left" ? -300 : 300;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const scrollToCard = (index) => {
//     const card = cardRefs.current[index];
//     if (card && scrollRef.current) {
//       card.scrollIntoView({
//         behavior: "smooth",
//         inline: "center",
//         block: "nearest",
//       });
//     }
//   };

//   return (
//     <section className="py-16 px-4">
//       <motion.section
//         id="projects"
//         ref={ref}
//         initial={{ opacity: 0, y: 50 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 1.9, ease: "easeOut" }}
//         className=" text-white py-16 px-4 md:px-16"
//       >
//         <h2
//           className="flex justify-center align-middle ttext-[100px] sm:text-[150px] md:text-[200px]
//             font-bold text-transparent bg-clip-text bg-gradient-to-b
//              from-white/30 to-black"
//         >
//           Projects
//         </h2>

//         <div className="relative">
//           <div
//             ref={scrollRef}
//             className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 snap-x"
//           >
//             {projects.map((project, idx) => (
//               <div
//                 key={idx}
//                 ref={(el) => (cardRefs.current[idx] = el)}
//                 onClick={() => scrollToCard(idx)}
//                 className="flex-shrink-0 w-[300px] bg-white rounded-2xl shadow-md p-4 snap-center transition hover:shadow-xl cursor-pointer"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="rounded-xl h-40 object-cover mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-[#111]">
//                   {project.title}
//                 </h3>
//                 <div className="flex flex-wrap gap-2 mt-2">
//                   {project.tags.map((tag, index) => (
//                     <span
//                       key={index}
//                       className="bg-[#e0e0e0] text-sm px-2 py-1 rounded-full text-gray-700"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-sm mt-3 text-gray-600">
//                   {project.description}
//                 </p>

//                 <div className="flex justify-between mt-4">
//                   <a
//                     href={project.code}
//                     className="text-sm flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300 transition"
//                   >
//                     <FaCode />
//                   </a>
//                   <a
//                     href={project.live}
//                     className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold transition"
//                   >
//                     Live View
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
//             <button
//               onClick={() => scroll("left")}
//               className="bg-amber-500 border p-2 rounded-full shadow hover:bg-amber-950 transition cursor-pointer"
//             >
//               <FaArrowLeft />
//             </button>
//           </div>
//           <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
//             <button
//               onClick={() => scroll("right")}
//               className="bg-amber-500 border p-2 rounded-full shadow hover:bg-amber-950 transition cursor-pointer"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </motion.section>
//     </section>
//   );
// };

// export default Project;

import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCode } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { div } from "framer-motion/client";

const projects = [
  {
    title: "Bmi-Calculator",
    tags: ["JavaScript", "HTML", "CSS"],
    description: "Instantly calculate your body mass index.",
    image: "/portfolio_assets/bmi_calculator.png",

    live: "https://bmi-calculator-ten-pi.vercel.app/ ",
    code: "https://github.com/mohitkhatri05/bmi-calculator.git",
  },
  {
    title: "Tic-Tac-Toe-Game",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    description: "Classic X and O strategy board game.",
    image: "/portfolio_assets/tic_tac_toe.png",
    live: "https://tic-tac-toe-game-khaki-gamma.vercel.app/",
    code: "https://github.com/mohitkhatri05/tic_tac_toe_game.git",
  },
  {
    title: "Rock-Paper-Scissor-Game",
    tags: ["WebGL", "JavaScript", "HTML", "CSS"],
    description: "Fun hand-gesture game against computer.",
    image: "/portfolio_assets/rock_paper_scissor.png",
    live: "https://rock-paper-scissor-game-beta-ten.vercel.app/",
    code: "https://github.com/mohitkhatri05/rock-paper-scissor-game.git",
  },
  {
    title: "Unlimited-color",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    description: "Endless beautiful random color generator.",
    image: "/portfolio_assets/unlimited_color.png",
    live: "https://unlimited-color-kappa.vercel.app/",
    code: "https://github.com/mohitkhatri05/unlimited-color.git",
  },
  {
    title: "Color Changer",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    description: "Simple tool to change background colors.",
    image: "/portfolio_assets/color_changer.png",
    live: "https://color-changer-rose-ten.vercel.app/",
    code: "https://github.com/mohitkhatri05/color-changer.git",
  },
];

const Project = () => {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Drag scroll states
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    scrollRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    scrollRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToCard = (index) => {
    const card = cardRefs.current[index];
    if (card && scrollRef.current) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <section className="py-16 px-4">
      <motion.section
        id="projects"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.9, ease: "easeOut" }}
        className="text-white  py-16 px-4 md:px-16"
      >
        <h2
          className="flex justify-center align-middle text-[100px] sm:text-[150px] md:text-[200px] 
          font-bold text-transparent bg-clip-text bg-gradient-to-b
          from-white/30 to-black"
        >
          Projects
        </h2>

        <div className="relative">
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex space-x-6 overflow-x-auto  px-4 snap-x snap-mandatory scrollbar-hide cursor-grab select-none"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="flex-shrink-0 h-[600px]  w-[400px] border-white/[0.2] border  rounded-2xl 
                shadow-md p-4 snap-center transition hover:shadow-xl cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl h-100 object-cover mb-4 "
                />
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <div className="flex flex-wrap  gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-[#e0e0e0] text-sm px-2 py-1 rounded-full text-black font-semibold"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="text-sm mt-3 text-white">{project.description}</p>

                <div className="flex justify-between mt-4">
                  <a
                    target="_blank"
                    href={project.code}
                    className="text-sm flex items-center gap-1 px-4 py-1 bg-gray-200 rounded-full
                     text-gray-800  hover:bg-gray-300 transition"
                  >
                    <FaCode />
                  </a>
                  <a
                    target="_blank"
                    href={project.live}
                    className="bg-white hover:bg-gray-300 text-black px-4 py-1 rounded-full text-sm font-semibold transition"
                  >
                    Live View
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("left")}
              className="bg-black hover:bg-gray-900 border p-2 rounded-full shadow transition cursor-pointer"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("right")}
              className=" border p-2 rounded-full shadow bg-black hover:bg-gray-900 transition cursor-pointer"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Project;
