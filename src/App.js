import React, { useEffect } from "react";
import axios from "axios";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  useEffect(() => {
    const makeCall = async () => {
      const { data } = await axios.get("/hello");
      console.log(data);
    };
    makeCall();
  }, []);
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/education" component={Education} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
