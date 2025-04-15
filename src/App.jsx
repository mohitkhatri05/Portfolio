import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Tech from "./components/Tech.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/footer.jsx";
import LampDemo from "./components/lamp-demo";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black text-white">
      <LampDemo />
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Project />
        <Contact />
        <Footer />
        
      </div>
      
    </>
  );
}

export default App;
