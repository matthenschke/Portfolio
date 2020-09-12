import React, { useEffect } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
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
      <Main />
      <Footer />
    </div>
  );
}

export default App;
