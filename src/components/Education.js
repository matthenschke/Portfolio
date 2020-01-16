import React from "react";
import { Container, ListGroup } from "react-bootstrap";

const Education = () => {
  return (
    <div id="education">
      <Container>
        <h1 className="text-center">Education</h1>
        <div className="school">
          <div className="school-info">
            <p>
              College of Staten Island (CUNY)
              <span className="float-right">2016-2020</span>
            </p>
          </div>
          <div className="degree-list">
            <h2 className="text-center">Degrees</h2>
            <div className="degree">
              <p>
                Associate in Applied Science{" "}
                <span className="float-right">2016-2019</span>
              </p>
              <p>Computer Technology/Programming</p>
              <p>Summa Cum Laude</p>
            </div>
            <div className="degree">
              <p>
                Bachelor's of Science
                <span className="float-right">2016-2020</span>
              </p>
              <p>Computer Science</p>
            </div>
          </div>
        </div>
        <div className="classes">
          <h2>
            Here are a list of courses that I completed while completing my
            Computer Science degrees
          </h2>
          <ul>
            <li>Software Engineering</li>
            <li>Data Structures</li>
            <li>Analysis of Algorithms</li>
            <li>Object Oriented Software Design</li>
            <li>Web Database Applications</li>
            <li>Discrete Mathematical Structures</li>
            <li>Switching and Automata Theory</li>
            <li>Serious Game Development</li>
          </ul>
        </div>
      </Container>
      <hr />
    </div>
  );
};

export default Education;
