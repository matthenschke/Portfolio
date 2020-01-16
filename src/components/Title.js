import React from "react";
import titleImg from "../imgs/me.JPG";

import { tada } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { Container } from "react-bootstrap";

const styles = {
  tada: {
    animation: "x 1s",
    animationName: Radium.keyframes(tada, "tada")
  }
};

const Title = props => {
  return (
    <Container className="text-center">
      <StyleRoot>
        <section id="title" style={styles.tada}>
          <header>
            <img alt="#" src={titleImg} />
            <h1>Matthew Henschke</h1>
            <h2>
              Software Developer/Engineer<i className="fas fa-laptop"></i>
            </h2>
            <hr />
          </header>
        </section>
      </StyleRoot>
    </Container>
  );
};

export default Title;
