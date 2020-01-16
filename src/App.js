import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Closing from "./components/Closing";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Title />
      <Intro />
      <Skills />
      <Education />
      <Resume />
      <Contact />
      <Closing />
      <Footer />
    </div>
  );
}

export default App;
