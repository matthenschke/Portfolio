import React, { Component } from "react";

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

import axios from "axios";

class App extends Component {
  componentWillMount() {
    axios
      .get("/hello")
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  }

  constructor(props) {
    super(props);
  }
  render() {
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
}

export default App;
