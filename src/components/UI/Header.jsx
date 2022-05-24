import React, { Fragment, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  return (
    <Navbar
      className={classes.navbar}
      collapseOnSelect
      expand="md"
      bg="light"
      variant="light"
      fixed="top"
    >
      <Container>
        <Navbar.Brand className={classes.brand}>
          {location.pathname === "/" ? (
            "DevNEXUS"
          ) : (
            <Link
              style={{
                height: "fit-content",
                fontFamily: "'Press Start 2P', cursive",
                fontSize: "1.1rem",
                color: "black",
                textDecoration: "none",
                display: "block",
                margin: "1rem 0",
              }}
              to="/"
            >
              DevNEXUS
            </Link>
          )}
        </Navbar.Brand>
        {location.pathname === "/" && (
          <Fragment>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/#about" className="mx-3">
                  About
                </Nav.Link>
                <Nav.Link href="/#skills" className="mx-3">
                  Skills
                </Nav.Link>
                <Nav.Link href="/#work" className="mx-3">
                  Projects
                </Nav.Link>
                <Nav.Link
                  href={`${process.env.PUBLIC_URL}/static/files/Osunkiyesi Temitayo CV 13-05-2022.pdf`}
                  className="mx-3"
                >
                  Resume
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Fragment>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
