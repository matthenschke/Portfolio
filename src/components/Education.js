import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

const Education = () => {
  return (
    <div id="education" className="mt-5">
      <Container>
        <h1 className="text-center pb-5">
          Education{" "}
          <span role="img" aria-label="school">
            🏫{" "}
          </span>
        </h1>
        <div className="school text-center text-md-left">
          <h4 className="school-name font-weight-bold">
            College of Staten Island (CUNY)
            <span className="pl-2" role="img" aria-label="dolphin">
              🐬
            </span>
            <span className="float-md-right pl-3">2016-2020</span>
          </h4>
          <h2 className="text-center py-4">Degrees</h2>
          <div className="degree-list pt-3 pb-5">
            <div className="degree text-center text-md-left">
              <h5 className="pb-0 mb-0">
                Associate in Applied Science{" "}
                <span className="float-md-right pl-3">2016-2019</span>
              </h5>
              <p className="pb-0 mb-0">Computer Technology/Programming</p>
              <p className="pb-0 mb-1">Summa Cum Laude</p>
            </div>
            <div className="pt-3 degree">
              <h5 className="mb-0">
                Bachelor's of Science
                <span className="float-md-right pl-3">2016-2020</span>
              </h5>
              <p className="mb-1">Computer Science</p>
            </div>
          </div>
        </div>
        <div className="classes">
          <h4 className="text-center pb-5">
            Here are a list of courses that I completed while completing my
            degrees
          </h4>
          <ScrollAnimation animateIn="fadeInLeft">
            <Row className="justify-content-around">
              <Col md={5} className="shadow py-3 mb-5 text-center">
                <p>Software Engineering</p>
                <p>Data Structures</p>
                <p>Analysis of Algorithms</p>
                <p>Object Oriented Software Design</p>
                <p>Seminar in Computer Science</p>
                <p>Introduction to Database Systems</p>
              </Col>
              <Col md={5} className="shadow py-3 mb-5 text-center">
                <p>Web Database Applications</p>
                <p>Discrete Mathematical Structures</p>
                <p>Switching and Automata Theory</p>
                <p>Serious Game Development</p>
                <p>Machine Learning</p>
                <p>Calculus (1,2,3)</p>
              </Col>
            </Row>
          </ScrollAnimation>
        </div>
      </Container>
      <hr />
    </div>
  );
};

export default Education;
