import React from "react";

const Footer = () => {
  return (
    <footer className="mb-5">
      <p>Matthew Henschke &copy; {new Date().getFullYear()}</p>
      <p>Web Design By: Matthew Henschke</p>
      <span>
        This website was created with React, Bootstrap and a dab of CSS
        <span role="img" aria-label="winking-face" className="pl-2">
          😉
        </span>
      </span>
    </footer>
  );
};

export default Footer;
