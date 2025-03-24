import React from "react";
import img from "../imgs/code.jpeg";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <section id="about" className="mt-5">
      <ScrollAnimation animateIn="jackInTheBox">
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
                Hello everyone! I am a full-stack developer at IBM with a
                passion for building scalable, efficient, and user-friendly web
                applications. You absolutely came to the right place if you are
                looking for an experienced software developer that is passionate
                about his work and is willing to learn and grow through new
                experiences and opportunities. Do not hesitate to reach out to
                me about anything.
              </p>
              <p className="mb-5">
                Outside of programming, I enjoy playing basketball, producing
                music in FL Studio, exploring new countries, hiking scenic
                trails, and snowboarding.
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
      </ScrollAnimation>
    </section>
  );
};

export default About;
