import React from "react";
import closingGif from "../imgs/jimmy_fallon.gif";

const Closing = () => {
  return (
    <div id="closing">
      <div className="container text-center">
        <h1>Thanks For Stopping By!</h1>
        <img className="my-5 rounded" src={closingGif} />
      </div>
    </div>
  );
};

export default Closing;
