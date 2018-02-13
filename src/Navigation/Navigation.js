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
import logo from "../img/turtle_logo.png";
import "./Navigation.css";

export default class Navigation extends React.Component<{}> {
  render() {
    if (process.env.REACT_APP_PRIVATE === true) {
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
                <IndexLinkContainer to="/">
                  <MenuItem>Who we are</MenuItem>
                </IndexLinkContainer>
                <LinkContainer to="/locations">
                  <MenuItem>Where we are</MenuItem>
                </LinkContainer>

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
                    <MenuItem eventKey={1.5}>Learn</MenuItem>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      // public
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
                <IndexLinkContainer to="/">
                  <MenuItem>Who we are</MenuItem>
                </IndexLinkContainer>
                <LinkContainer to="/locations">
                  <MenuItem>Where we are</MenuItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

/*
<NavDropdown eventKey={2} title="Contribute" id="nav-contribute">
  <LinkContainer to="/encounters">
    <MenuItem eventKey={2.1}>Example form</MenuItem>
  </LinkContainer>
</NavDropdown>
*/
