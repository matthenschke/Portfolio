import React from "react";
import img from "../imgs/code.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <ScrollAnimation animateIn="jackInTheBox">
      <div id="about">
        <Container>
          <h1 className="text-center">
            Who is this guy?
            <span role="img" aria-label="thinking-face" className="pl-2">
              🤔
            </span>
          </h1>
          <Row className="mt-5">
            <Col lg={6}>
              <p>
                Hello everyone! I am a computer science undergraduate student at
                the College of Staten Island on a mission to become a
                professional software engineer/developer. Powered by VS Code and
                some coffee, I specialize in developing responsive,
                user-friendly web applications using a variety of different
                programming languages and frameworks as you can see under my
                skills. You absolutely came to the right place if you are
                looking for a computer programmer that is passionate about his
                work and is willing to learn and grow through new experiences
                and opportunities. Do not hesitate to reach out to me about
                anything.
              </p>
              <p className="mb-5">
                Outside of programming, you can find me playing or watching
                basketball, working out, capturing landscape photos with my
                camera, or catching up with some of my peers.
              </p>
            </Col>
            <Col lg={6}>
              <img
                className="rounded w-100 h-100 pl-lg-5 pb-5"
                src={img}
                alt="react-code"
              />
            </Col>
          </Row>
        </Container>
        <hr className="w-100" />
      </div>
    </ScrollAnimation>
  );
};

export default About;
