// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Image, Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from './turtle-logo.jpg';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <Image
                  src={logo}
                  className="logo"
                  alt="North West Shelf Flatbacks"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/datasets">
                <NavItem>Datasets</NavItem>
              </LinkContainer>
              <LinkContainer to="/projects">
                <NavItem>Projects</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
