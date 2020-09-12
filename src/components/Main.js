import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Resume from "./Resume";
import Contact from "./Contact";
import Projects from "./Projects";

const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Resume />
      <Contact />
    </main>
  );
};

export default Main;
