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
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaCode } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Sharkie",
    tags: ["JavaScript", "HTML", "CSS"],
    description: "JavaScript based jump-and-run game",
    image: "/projects/sharkie.png",
    live: "#",
    code: "#",
  },
  // Add other projects as needed...
  {
    title: "Pokedex",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    description: "All 898 Pokémon description & stats",
    image: "/projects/pokedex.png",
    live: "#",
    code: "#",
  },
  {
    title: "Pokedex",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    description: "All 898 Pokémon description & stats",
    image: "/projects/pokedex.png",
    live: "#",
    code: "#",
  },
  {
    title: "Pokedex",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    description: "All 898 Pokémon description & stats",
    image: "/projects/pokedex.png",
    live: "#",
    code: "#",
  },
  {
    title: "Pokedex",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    description: "All 898 Pokémon description & stats",
    image: "/projects/pokedex.png",
    live: "#",
    code: "#",
  },

  {
    title: "Portfolio 2022",
    tags: ["WebGL", "JavaScript", "HTML", "CSS"],
    description: "My 3D interactive portfolio",
    image: "/projects/portfolio2022.png",
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio 2022",
    tags: ["WebGL", "JavaScript", "HTML", "CSS"],
    description: "My 3D interactive portfolio",
    image: "/projects/portfolio2022.png",
    live: "#",
    code: "#",
  },
  {
    title: "Portfolio 2022",
    tags: ["WebGL", "JavaScript", "HTML", "CSS"],
    description: "My 3D interactive portfolio",
    image: "/projects/portfolio2022.png",
    live: "#",
    code: "#",
  },
];

const Project = () => {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        className=" text-white py-16 px-4 md:px-16"
      >
        <h2
          className="flex justify-center align-middle text-[240px] font-bold text-transparent
               bg-clip-text bg-gradient-to-b from-white/55 to-black"
        >
          Projects
        </h2>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide px-4 snap-x"
          >
            {projects.map((project, idx) => (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                onClick={() => scrollToCard(idx)}
                className="flex-shrink-0 w-[300px] bg-white rounded-2xl shadow-md p-4 snap-center transition hover:shadow-xl cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl h-40 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-[#111]">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#e0e0e0] text-sm px-2 py-1 rounded-full text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm mt-3 text-gray-600">
                  {project.description}
                </p>

                <div className="flex justify-between mt-4">
                  <a
                    href={project.code}
                    className="text-sm flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300 transition"
                  >
                    <FaCode />
                  </a>
                  <a
                    href={project.live}
                    className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold transition"
                  >
                    Live View
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("left")}
              className="bg-amber-500 border p-2 rounded-full shadow hover:bg-amber-950 transition cursor-pointer"
            >
              <FaArrowLeft />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("right")}
              className="bg-amber-500 border p-2 rounded-full shadow hover:bg-amber-950 transition cursor-pointer"
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
