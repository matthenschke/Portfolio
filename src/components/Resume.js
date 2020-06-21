import React from "react";
import resumeDocument from "../docs/resume.pdf";
import { Container } from "react-bootstrap";
const Resume = () => {
  return (
    <div id="resume">
      <Container>
        <h1 className="text-center py-5">
          Do You Want To See My Resume?
          <span className="pl-2" role="img" aria-label="file">
            📄
          </span>
        </h1>
        <embed
          src={resumeDocument}
          width="100%"
          height="800px"
          internalinstanceid="5"
        />
      </Container>
      <hr />
    </div>
  );
};

export default Resume;
