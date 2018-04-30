// @flow
import React from "react";
import { Link } from "react-router-dom";
import {
  IndexLinkContainer
  // LinkContainer
} from "react-router-bootstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row
} from "reactstrap";
import turtlelogo from "../img/turtle_logo.png";
import dbcalogo from "../img/dbca_logo.svg";
// import dbcalogoblack from "../img/dbca_logo_black.svg";
import coa from "../img/coa.svg";
import "./Navigation.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Row className="masthead gcio-grey d-none d-sm-none d-md-block">
          <IndexLinkContainer to="/" exact>
            <NavbarBrand>
              <img
                src={dbcalogo}
                className="logo"
                alt="Department of Biodiversity, Conservation and Attractions"
              />
              <img
                src={turtlelogo}
                className="logo d-md-none d-lg-block"
                alt="North West Shelf Flatbacks"
              />
            </NavbarBrand>
          </IndexLinkContainer>
        </Row>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <IndexLinkContainer to="/" exact>
            <NavbarBrand>
              <img
                src={coa}
                className="logo d-md-none d-sm-block d-block"
                alt="Department of Biodiversity, Conservation and Attractions"
              />
            </NavbarBrand>
          </IndexLinkContainer>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/" exact="true">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/story" exact="true">
                  The Flatback Story
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects" exact="true">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/places" exact="true">
                  Places
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/program" exact="true">
                  Program
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/people" exact="true">
                  People
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/participate" exact="true">
                  Participate
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
