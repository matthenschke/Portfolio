import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <ScrollAnimation animateIn="flipInX">
      <div id="skills" className="mt-5">
        <Container>
          <h1 className="text-center pb-5">
            Technologies{" "}
            <span role="img" aria-label="boy-using-computer">
              👨🏻‍💻{" "}
            </span>
          </h1>
          <Row className="justify-content-around">
            <Col md={5} className="shadow py-3 mr-1 mb-5">
              <h4 className="text-center">Front-End</h4>
              <div className="d-flex flex flex-wrap justify-content-center skill-container mt-3">
                <i className="devicon-html5-plain-wordmark colored px-1 py-3"></i>
                <i className="devicon-css3-plain-wordmark colored px-1 py-3"></i>
                <i className="devicon-javascript-plain colored px-1 py-3"></i>
                <i className="devicon-react-original-wordmark colored px-1 py-3"></i>
                <i className="devicon-jquery-plain-wordmark px-1 py-3"></i>
                <i className="devicon-bootstrap-plain colored px-1 py-3"></i>
              </div>
            </Col>
            <Col md={5} className="shadow py-3 mb-5">
              <h4 className="text-center">Back-End</h4>
              <div className="d-flex flex flex-wrap justify-content-center skill-container mt-3">
                <i className="devicon-cplusplus-plain colored px-1 py-3"></i>
                <i className="devicon-java-plain-wordmark colored px-1 py-3"></i>
                <i className="devicon-python-plain-wordmark colored px-1 py-3"></i>
                <i className="devicon-nodejs-plain colored px-1 py-3"></i>
                <i className="devicon-express-original-wordmark px-1 py-3"></i>
                <i className="devicon-typescript-plain colored px-1 py-3"></i>
                <i className="devicon-mysql-plain-wordmark colored px-1 py-3"></i>
                <i className="devicon-mongodb-plain-wordmark colored px-1 py-3"></i>
              </div>
            </Col>
            <Col md={5} className="shadow py-3 mb-5">
              <h4 className="text-center">Other</h4>
              <div className="d-flex flex flex-wrap justify-content-center skill-container mt-3">
                <i className="devicon-git-plain-wordmark colored px-1 py-3"></i>
                <i className="devicon-heroku-original-wordmark colored px-1 py-3"></i>
                <i className="devicon-linux-plain colored px-1 py-3"></i>
                <i className="devicon-ubuntu-plain-wordmark colored px-1 py-3"></i>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    </ScrollAnimation>
  );
};

export default Skills;
