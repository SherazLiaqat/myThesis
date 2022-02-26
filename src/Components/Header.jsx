import React from "react";
import { NavLink } from "react-router-dom";
import {  Navbar, Nav, Container } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                style={{
                  color: "white",
                  fontSize: "32px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginLeft: "-10rem",
                }}
                to="/"
              >
                <i class="fa fa-home" aria-hidden="true"></i>Home
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
