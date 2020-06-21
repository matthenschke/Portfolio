import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 0;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);
  return (
    <Navbar
      expand="md"
      style={{ backgroundColor: `${scroll ? "white" : "transparent"}` }}
      className="fixed-top mb-5"
    >
      <Navbar.Brand className="logo" href="#">
        <span>{"< "}</span>
        Matthew Henschke
        <span>{" />"}</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="ml-auto">
          <Nav.Link href="#about" className="px-2">
            About
          </Nav.Link>
          <Nav.Link href="#skills" className="px-2">
            Skills
          </Nav.Link>
          <Nav.Link href="#projects" className="px-2">
            Projects
          </Nav.Link>
          <Nav.Link href="#education" className="px-2">
            Education
          </Nav.Link>
          <Nav.Link href="#resume" className="px-2">
            Resume
          </Nav.Link>
          <Nav.Link href="#contact" className="px-2">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
