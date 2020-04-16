import React from "react";
import resumeDocument from "../docs/resume.pdf";
const Resume = () => {
  return (
    <div id="resume">
      <div className="container">
        <h1 className="text-center py-5">
          Do You Want To See My Resume?<span className="pl-2">📄</span>
        </h1>
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
