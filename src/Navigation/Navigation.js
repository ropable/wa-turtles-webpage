// @flow
import React from "react";
import { Link } from "react-router-dom";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
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
          <NavbarToggler onClick={this.toggle} />
          <NavbarBrand href="/">
            <img
              src={dbcalogo}
              className="logo d-sm-block"
              alt="Department of Biodiversity, Conservation and Attractions"
            />
            <img
              src={turtlelogo}
              className="logo d-none d-sm-none d-md-none d-lg-block"
              alt="North West Shelf Flatbacks"
            />
          </NavbarBrand>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/story">
                  The Flatback Story
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/projects">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/places">
                  Places
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/program">
                  Program
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/people">
                  People
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/participate">
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
