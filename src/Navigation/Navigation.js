// @flow
import React from "react";
// import { Link } from "react-router-dom";
// import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import turtlelogo from "../img/turtle_logo.png";
import dbcalogo from "../img/dbca_logo.svg";
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
        <Navbar color="dark" dark fixed="top" expand="md">
          <NavbarBrand href="/">
            <a href="https://dbca.wa.gov.au" target="_">
              <img
                src={dbcalogo}
                class="logo"
                alt="Department of Biodiversity, Conservation and Attractions"
              />
            </a>
            <a href="https://github.com/dbca-wa/wa-turtles-webpage" target="_">
              <img
                src={turtlelogo}
                class="logo"
                alt="North West Shelf Flatbacks"
              />
            </a>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/story">The Flatback Story</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/locations">Places</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
