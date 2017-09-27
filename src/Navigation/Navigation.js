// @flow
import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import {
  Image,
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  MenuItem
} from "react-bootstrap";
import logo from "../img/turtle_logo.png";
import "./Navigation.css";

export default class Navigation extends React.Component<{}> {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <Image src={logo} alt="North West Shelf Flatbacks" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={1} title="Discover" id="nav-data">
                <LinkContainer to="/datasets">
                  <MenuItem eventKey={1.1}>Turtle datasets</MenuItem>
                </LinkContainer>
                <LinkContainer to="/infosheets">
                  <MenuItem eventKey={1.2}>Info sheets</MenuItem>
                </LinkContainer>
                <LinkContainer to="/projects">
                  <MenuItem eventKey={1.3}>Projects</MenuItem>
                </LinkContainer>
                <LinkContainer to="/locations">
                  <MenuItem eventKey={1.4}>Locations</MenuItem>
                </LinkContainer>
                <LinkContainer to="/education">
                  <NavItem>Learn</NavItem>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown eventKey={2} title="Contribute" id="nav-contribute">
                <LinkContainer to="/encounters">
                  <MenuItem eventKey={2.1}>Example form</MenuItem>
                </LinkContainer>
              </NavDropdown>

              <NavDropdown eventKey={3} title="About us" id="nav-contribute">
                <LinkContainer to="/">
                  <MenuItem eventKey={3.1}>About us</MenuItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
