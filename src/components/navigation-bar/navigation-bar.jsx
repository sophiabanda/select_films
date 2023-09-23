import { Navbar, Container, Nav, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export const NavigationBar = ({ user, onLoggedOut, handleSearch }) => {
  return (
    <Navbar sticky="top" data-bs-theme="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Select Films
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/profile"}>
                  Profile
                </Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to={"/signup"}>
                  Signup
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
