import React from "react";
import gif from "../imgs/homer.gif";
import { Container, Row, Col } from "react-bootstrap";

const Intro = () => {
  return (
    <div id="intro">
      <Container>
        <h1 className="text-center">Who is Matthew Henschke?</h1>
        <Row fluid={true} className="mt-5">
          <Col>
            Hello everyone! I am a computer science undergraduate student at the
            College of Staten Island on a mission to become a software
            engineer/developer. I specialize in developing responsive,
            user-friendly web applications using a variety of different
            programming languages and frameworks as you can see under my skills.
            You absolutely came to the right place if you are looking for a
            computer programmer that is passionate about his work and is willing
            to learn and grow through new experiences and opportunities. Do not
            hesitate to reach out to me about anything{" "}
            <i className="far fa-smile"></i>
          </Col>
          <Col>
            <img className="rounded" src={gif} />
          </Col>
        </Row>
        <hr />
      </Container>
    </div>
  );
};

export default Intro;
