// @flow
import React from "react";
import { Col, Button, Collapse, Image, Row, Navbar } from "react-bootstrap";

import "./Footer.css";
import dbcalogo from "../img/dbca_logo.svg";
import ghlogo from "../img/gh32.png";

type State = {
  showSitemap: boolean
};

export default class Footer extends React.Component<State> {
  state = {
    showSitemap: false
  };

  toggleSitemap = () => {
    this.setState({ showSitemap: !this.state.showSitemap });
  };

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fixedBottom>
          <Collapse id="Sitemap" in={this.state.showSitemap}>
            <div className="credit">
              <Row>
                <Col xs={12} md={4} lg={3}>
                  <h3>The Science</h3>
                  <p>Locations</p>
                  <p>Projects</p>
                </Col>
                <Col xs={12} md={4} lg={3}>
                  <h3>About</h3>
                  <p>Program</p>
                  <p>People</p>
                  <p>Participate</p>
                </Col>
              </Row>
            </div>
          </Collapse>

          <span className="text-muted credit">
            <a href="https://github.com/dbca-wa/wa-turtles-webpage" target="_">
              <Image
                className="logo"
                src={dbcalogo}
                alt="Department of Biodiversity, Conservation and Attractions"
              />
            </a>
          </span>
          <span className="text-muted credit">
            <a href="https://github.com/dbca-wa/wa-turtles-webpage" target="_">
              <Image src={ghlogo} alt="GitHub" />
            </a>
          </span>

          <span className="text-muted credit">
            <a
              href="https://travis-ci.org/dbca-wa/wa-turtles-webpage"
              target="_"
            >
              <Image
                src="https://travis-ci.org/dbca-wa/wa-turtles-webpage.svg?branch=master"
                alt="Build Status"
              />
            </a>
          </span>
          <span className="text-muted credit">
            <a
              href="https://coveralls.io/github/dbca-wa/wa-turtles-webpage"
              target="_"
            >
              <Image
                src="https://coveralls.io/repos/github/dbca-wa/wa-turtles-webpage/badge.svg"
                alt="Test Coverage"
              />
            </a>
          </span>
          <span className="text-mScuted credit">
            <a href="http://waffle.io/dbca-wa/wa-turtles-webpage" target="_">
              <Image
                src="https://badge.waffle.io/dbca-wa/wa-turtles-webpage.svg?label=ready&title=Ready"
                alt="To do"
              />
            </a>
          </span>
          <span className="text-muted credit">
            <Button
              id="btnToggleSitemap"
              bsSize="xsmall"
              bsStyle="primary"
              onClick={this.toggleSitemap}
            >
              Sitemap
            </Button>
          </span>
        </Navbar>
      </div>
    );
  }
}
