import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="my-5 text-center font-italic">
        <p>Matthew Henschke &copy; {new Date().getFullYear()}</p>
        <p>Web Design By: Matthew Henschke </p>
        <p>This website was created with React, Bootstrap and a dab of CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
