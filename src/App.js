import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
