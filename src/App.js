import React, { useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const makeCall = async () => {
      const { data } = await axios.get("/hello");
      console.log(data);
    };
    makeCall();
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
