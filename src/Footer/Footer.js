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
                  <h3>Category 1</h3>
                  <p>These</p>
                  <p>are</p>
                  <p>placeholder</p>
                  <p>links</p>
                </Col>
                <Col xs={12} md={4} lg={3}>
                  <h3>Category 2</h3>
                  <p>Link</p>
                  <p>Link</p>
                  <p>Link</p>
                  <p>Link</p>
                </Col>
                <Col xs={12} md={4} lg={3}>
                  <h3>Category 3</h3>
                  <p>Link</p>
                  <p>Link</p>
                  <p>Link</p>
                  <p>Link</p>
                </Col>
                <Col xs={12} md={4} lg={3}>
                  <h3>Category 4</h3>
                  <p>Link</p>
                  <p>Link</p>
                  <p>Link</p>
                  <p>Link</p>
                </Col>
              </Row>
            </div>
          </Collapse>

          <span className="text-muted credit">
            <a href="https://github.com/parksandwildlife/wa-turtles-webpage">
              <Image
                className="logo"
                src={dbcalogo}
                alt="Department of Biodiversity, Conservation and Attractions"
              />
            </a>
          </span>
          <span className="text-muted credit">
            <a href="https://github.com/parksandwildlife/wa-turtles-webpage">
              <Image src={ghlogo} alt="GitHub" />
            </a>
          </span>
          <span className="text-muted credit">
            <a href="https://travis-ci.org/parksandwildlife/wa-turtles-webpage">
              <Image
                src="https://travis-ci.org/parksandwildlife/wa-turtles-webpage.svg?branch=master"
                alt="Build Status"
              />
            </a>
          </span>
          <span className="text-muted credit">
            <a href="https://coveralls.io/github/parksandwildlife/wa-turtles-webpage">
              <Image
                src="https://coveralls.io/repos/github/parksandwildlife/wa-turtles-webpage/badge.svg"
                alt="Test Coverage"
              />
            </a>
          </span>
          <span className="text-muted credit">
            <a href="http://waffle.io/parksandwildlife/wa-turtles-webpage">
              <Image
                src="https://badge.waffle.io/parksandwildlife/wa-turtles-webpage.svg?label=ready&title=Ready"
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
