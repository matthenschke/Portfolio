import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default () => {
  return (
    <Navbar expand="lg" className="fixed-top">
      <Navbar.Brand href="#">Matthew Henschke</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNavDropdown" />
      <Navbar.Collapse id="navbarNavDropdown">
        <Nav>
          <Nav.Link href="#intro">
            <i className="fas fa-user-circle"></i>Intro
          </Nav.Link>
          <Nav.Link href="#skills">
            <i className="fas fa-desktop"></i>Skills
          </Nav.Link>
          <Nav.Link href="#education">
            <i className="fas fa-school"></i>Education
          </Nav.Link>
          <Nav.Link href="#resume">
            <i className="far fa-file"></i>Resume
          </Nav.Link>
          <Nav.Link href="#contact">
            <i className="fas fa-address-book"></i>Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
