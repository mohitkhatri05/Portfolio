import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Tech from "./components/Tech.jsx";
import Works from "./components/works.jsx";
import Feedbacks from "./components/feedbacks.jsx";
import Contact from "./components/contact.jsx";
import Stars from "./components/stars.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="bg-black text-white">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
        <Stars />
      </body>
      
    </>
  );
}

export default App;
