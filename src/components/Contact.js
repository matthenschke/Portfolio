import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <h1 className="text-center">Let's Have A Chat!</h1>
        <Row>
          <Col>
            <div className="info-box mr-auto">
              <h2 className="text-left">Contact</h2>
              <div className="text-left pb-4">
                <p>
                  <i className="far fa-envelope mr-2"></i>
                  matthewhenschke98@gmail.com
                </p>
              </div>
            </div>
          </Col>
          <Col>
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
