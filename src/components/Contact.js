import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact" className="mt-5">
      <Container>
        <h1 className="text-center pb-5">
          Let's Have A Chat!{" "}
          <span role="img" aria-label="speech" className="pl-2">
            💬{" "}
          </span>
        </h1>
        <Row className="justify-content-around">
          <Col md={5} className="shadow py-3 mb-5 text-center">
            <div className="info-box mr-auto">
              <h2>Contact</h2>
              <div className="pb-4">
                <p>
                  <i className="far fa-envelope mr-2"></i>
                  matthewhenschke98@gmail.com
                </p>
              </div>
            </div>
          </Col>
          <Col md={5} className="shadow py-3 mb-5 text-center">
            <div className="info-box ml-auto">
              <h2 className="text-center">Let's Connect!</h2>
              <div className="text-center mb-1">
                <a href="https://github.com/matthenschke">
                  <i className="fab fa-github-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/matthewhenschke/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default Contact;
