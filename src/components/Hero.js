import React, { useEffect, useState } from "react";
import titleImg from "../imgs/me.JPG";
import { Container, Jumbotron, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <Jumbotron
      fluid
      className="text-center text-dark d-flex flex-column justify-content-center align-items-center"
    >
      <div className="mt-5 p-4 hero-content text-white">
        <img
          alt="matthew henschke"
          src={titleImg}
          className="mb-3 img-responsive"
        />
        <h1>Matthew Henschke</h1>
        <h5>
          Software Developer/Engineer
          <span className="pl-2">💻</span>
        </h5>
      </div>
    </Jumbotron>
  );
};

export default Hero;
