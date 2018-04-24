// @flow
import React from "react";
import { Link } from "react-router-dom";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import {
  Image,
  Navbar,
  Nav,
  NavDropdown,
  // NavItem,
  MenuItem
} from "react-bootstrap";
import turtlelogo from "../img/turtle_logo.png";
import "./Navigation.css";

export default class Navigation extends React.Component<{}> {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <Image
                  src={turtlelogo}
                  className="logo"
                  alt="North West Shelf Flatbacks"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <MenuItem>Home</MenuItem>
              </IndexLinkContainer>

              <LinkContainer to="/story">
                <MenuItem>The Flatback Story</MenuItem>
              </LinkContainer>

              <NavDropdown eventKey={1} title="The Science" id="nav-data">
                <LinkContainer to="/projects">
                  <MenuItem eventKey={1.1}>Projects</MenuItem>
                </LinkContainer>
                <LinkContainer to="/locations">
                  <MenuItem eventKey={1.2}>Places</MenuItem>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/about">
                <MenuItem>About us</MenuItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
