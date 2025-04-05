// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const navLinks = [
//   { id: "about", title: "About" },
//   { id: "experience", title: "Experience" },
//   { id: "projects", title: "Projects" },
//   { id: "contact", title: "Contact" },
// ];

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   return (
//     <nav>
//       {toggle}
//       <div className="nav flex justify-between items-center bg-slate-900 text-white min-h-16 w-5xl m-auto p-3 py-2 border-solid rounded-full border-2 border-amber-400 mt-5">
//         <div className="logo flex justify-around iems-center ">
//           <Link
//             to="/"
//             onClick={() => {
//               setActive("");
//               window.scrollTo(0, 0);
//             }}
//           >
//             <img
//               src="/portfolio_assets/logo.png"
//               alt="logo"
//               className="w-9 h-9"
//             />
//           </Link>
//           <p className="text-white font-semibold cursor-pointer text-lg flex items-center gap-2 ml-2 ">
//             Mohit Khatri
//           </p>
//         </div>
//         <div className="hidden sm:block">
//           <ul className="flex justify-around gap-10 ">
//             {navLinks.map((link) => (
//               <li
//                 key={link.id}
//                 className={`${
//                   active === link.title ? "text-white" : "text-gray-600"
//                 } hover:text-white  font-bold cursor-pointer  `}
//                 onClick={() => setActive(link.title)}
//               >
//                 <a href={`#${link.id}`}>{link.title}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className=" hidden sm:block ">
//           <button className="flex bg-amber-500 rounded-full py-1.5 px-4.5 text-lg font-semibold">
//             Resume
//           </button>
//         </div>
//         <div className="sm:hidden flex items-center">

//           <img src="/portfolio_assets/menu.svg" className="h-[28px] w-[28px] cursor-pointer" alt="menu"  onClick={() => setToggle(!toggle)}/>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center  bg-slate-900  text-white min-h-16 w-full max-w-6xl mx-auto p-3 py-0.5 border-solid rounded-full border-2 border-amber-400 mt-5  shadow-[0_0_15px_#fbbf24]">
        {/* Logo Section */}
        <div className="logo flex items-center">
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center"
          >
            <img
              src="/portfolio_assets/logo.png"
              alt="logo"
              className="w-9 h-9"
            />

            <div className="text-white font-semibold cursor-pointer text-lg ml-2" style={{backgroundColor: "rgba(228, 3, 3, 0.5)"}}>
              Mohit Khatri
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white " : "text-gray-400"
                } hover:text-white font-semibold cursor-pointer transition duration-200 ease-in-out `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resume Button (Visible on larger screens) */}
        <div className="hidden sm:block ">
          <a
            href="/portfolio_assets/Mohit_Khatri_frontend_developer_CV (1).pdf"
            target="_blank"
            className="bg-amber-500 rounded-full py-2 px-6 text-lg font-semibold hover:bg-amber-950 "
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <img
            src={
              toggle
                ? "/portfolio_assets/close.svg"
                : "/portfolio_assets/menu.svg"
            }
            className="h-[28px] w-[28px] cursor-pointer"
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* Mobile Navigation (Slide-in Effect) */}
      {toggle && (
        <div className="absolute top-20 left-0 w-full bg-slate-900 shadow-lg p-5 transition-all duration-300">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white " : "text-gray-400"
                } hover:text-white font-semibold cursor-pointer transition duration-200 ease-in-out `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Resume Button (Visible on mobile menu) */}
          <div className="mt-4 text-center ">
            <a
              href="/portfolio_assets/Mohit_Khatri_frontend_developer_CV (1).pdf"
              className="bg-amber-500 rounded-full py-2 px-6 text-lg font-semibold hover:bg-amber-950 "
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
