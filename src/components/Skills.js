import React from "react";

// programming language logo images
import cPlusLogo from "../imgs/c++.png";
import javaLogo from "../imgs/java.png";
import pythonLogo from "../imgs/python.png";
import htmlLogo from "../imgs/html.png";
import cssLogo from "../imgs/css.png";
import jsLogo from "../imgs/javascript.png";
import bsLogo from "../imgs/bootstrap.png";
import jqLogo from "../imgs/jquery.png";
import reactLogo from "../imgs/react.png";
import nodeLogo from "../imgs/node.png";
import mysqlLogo from "../imgs/mysql.png";

import { Container, Row, Col } from "react-bootstrap";
const Skills = () => {
  return (
    <div id="skills">
      <Container>
        <h1 className="text-center">Technologies</h1>
        <Row className="skills-container">
          <Col xs={2} className="skill">
            <img className="skills-img" src={cPlusLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={javaLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={pythonLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={htmlLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={cssLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={jsLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={bsLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={jqLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={reactLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={nodeLogo} />
          </Col>
          <Col xs={2} className="skill">
            <img className="skills-img" src={mysqlLogo} />
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Skills;
