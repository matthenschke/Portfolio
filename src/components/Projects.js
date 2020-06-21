import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

// project imgs
import LyricImg from "../imgs/lyric_analysis.png";
import MH_KicksImg from "../imgs/mh_kicks.png";
import StockImg from "../imgs/stock_portfolio.png";
import BBoardImg from "../imgs/backboard.png";

const Projects = () => {
  return (
    <div id="projects" className="mt-5">
      <Container>
        <h1 className="text-center pb-5">
          Check Out My Projects!{" "}
          <span role="img" aria-label="light-bulb" className="pl-2">
            💡{" "}
          </span>
        </h1>
        <Row className="justify-content-around">
          <Col md={4}>
            <Card className="shadow mb-5 text-center">
              <div className="proj-img">
                <Card.Img variant="top" src={LyricImg} alt="lyric analysis" />
              </div>
              <Card.Body>
                <Card.Title>Lyric Analysis Application</Card.Title>

                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  Express
                </span>
                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  TypeScript
                </span>
                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  React
                </span>

                <span className="bg-success m-1 p-1 text-white rounded proj-tech">
                  CSS3
                </span>
              </Card.Body>
              <Card.Body>
                <Card.Link
                  href="https://matthenschke-lyric-analysis.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white p-2 rounded"
                >
                  View Project
                </Card.Link>
                <Card.Link
                  href="https://github.com/matthenschke/Lyric-Analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-danger text-white p-2 rounded"
                >
                  View Code
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow mb-5 text-center">
              <div className="proj-img">
                <Card.Img variant="top" src={MH_KicksImg} alt="M.H. Kicks" />
              </div>
              <Card.Body>
                <Card.Title>E-Commerce Website</Card.Title>
                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  HTML5
                </span>
                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  CSS3
                </span>
              </Card.Body>
              <Card.Body>
                <Card.Link
                  href="https://mh-kicks.herokuapp.com/"
                  target="_blank"
                  className="bg-primary text-white p-2 rounded"
                >
                  View Project
                </Card.Link>
                <Card.Link
                  href="https://github.com/matthenschke/MH-Kicks"
                  target="_blank"
                  className="bg-danger text-white p-2 rounded"
                >
                  View Code
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow mb-5 text-center">
              <div className="proj-img">
                <Card.Img variant="top" src={BBoardImg} alt="lyric analysis" />
              </div>
              <Card.Body>
                <Card.Title>Social Media Application</Card.Title>
                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  Express
                </span>
                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  React
                </span>
                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  Redux
                </span>

                <span className="bg-success m-1 p-1 text-white rounded proj-tech">
                  Firebase
                </span>
              </Card.Body>
              <Card.Body>
                <Card.Link
                  href="https://backboard-e4883.firebaseapp.com/"
                  target="_blank"
                  className="bg-primary text-white p-2 rounded"
                >
                  View Project
                </Card.Link>
                <Card.Link
                  href="https://github.com/matthenschke/backboard-client"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-danger text-white p-2 rounded"
                >
                  View Code
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow mb-5 text-center">
              <div className="proj-img">
                <Card.Img variant="top" src={StockImg} alt="lyric analysis" />
              </div>
              <Card.Body>
                <Card.Title>Stock Portfolio Website</Card.Title>

                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  Express
                </span>
                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  Redux
                </span>
                <span className="bg-success p-1 m-1 text-white rounded proj-tech">
                  React
                </span>

                <span className="bg-success m-1 p-1 text-white rounded proj-tech">
                  MySQL
                </span>
              </Card.Body>
              <Card.Body>
                <Card.Link
                  href="https://matt-henschke-stock-app.herokuapp.com/"
                  target="_blank"
                  className="bg-primary text-white p-2 rounded"
                >
                  View Project
                </Card.Link>
                <Card.Link
                  href="https://github.com/matthenschke/Stock-Portfolio-App"
                  target="_blank"
                  className="bg-danger text-white p-2 rounded"
                >
                  View Code
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default Projects;
