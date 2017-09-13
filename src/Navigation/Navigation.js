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
              <NavDropdown eventKey={1} title="Data" id="nav-data">
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
                <MenuItem divider />
                <LinkContainer to="/encounters">
                  <MenuItem eventKey={1.5}>Track census</MenuItem>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/education">
                <NavItem>Education</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
