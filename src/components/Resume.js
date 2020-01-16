import React from "react";
import resumeDocument from "../docs/resume.pdf";
const Resume = () => {
  console.log(resumeDocument);
  return (
    <div id="resume">
      <div className="container">
        <h1 className="text-center">Do You Want To See My Resume?</h1>
        <embed
          src={resumeDocument}
          width="100%"
          height="800px"
          internalinstanceid="5"
        />
        <hr />
      </div>
    </div>
  );
};

export default Resume;
