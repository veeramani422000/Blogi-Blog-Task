import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import logo from "../assets/img/blogi1.png";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto Nav1">
              <Nav.Link className="navbar-link ">Features</Nav.Link>
              <Nav.Link className="navbar-link ">Pricing</Nav.Link>
              <Nav.Link className="navbar-link ">Contact</Nav.Link>
            </Nav>
            <span className="navbar-text ">
              <Nav.Link className="navbar-link" style={{ color: "white" }}>
                {" "}
                Login{" "}
              </Nav.Link>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Sign up</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
