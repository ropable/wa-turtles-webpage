// @flow
import React from "react";
import { Navbar, Container, Collapse, Col, Row, Button } from "reactstrap";

import "./Footer.css";
import dbcalogo from "../img/dbca_logo.svg";
import ghlogo from "../img/gh32.png";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <Navbar className="gcio-grey clearfix" dark>
        <Collapse isOpen={this.state.collapse}>
          <Row className="gcio-grey text-white">
            <Col>
              <h1>Acknowledgement of Country</h1>
              <p>
                The Government of Western Australia acknowledges the traditional
                custodians throughout Western Australia and their continuing
                connection to the land, waters and community. We pay our
                respects to all members of the Aboriginal communities and their
                cultures; and to Elders both past and present.
              </p>

              <h1 className="text-white">About this page</h1>
              <p>
                This page aims to incorporate the design guidelines (
                <a
                  href="http://gcio.wa.gov.au/wp-content/uploads/2016/05/FINAL-Website-Visual-Design-and-Functional-Standard-April-2018-1.pdf"
                  target="_"
                  title="Design guidelines (PDF)"
                >
                  PDF
                </a>
                ) published by the GCIO in April 2018. Absolute adherence to all
                rules pf the guidelines is a work in progress, we appreciate
                your patience and
                <a
                  href="https://github.com/dbca-wa/wa-turtles-webpage/issues"
                  target="_"
                >
                  welcome your ideas and feedback
                </a>. This page works offline and can be installed as an app on
                mobile devices. Note that new versions might require a manual
                deletion of your browser's offline cache.
              </p>
              <span className="text-muted credit">
                <a
                  href="https://github.com/dbca-wa/wa-turtles-webpage"
                  target="_"
                >
                  <img src={ghlogo} alt="GitHub" />
                </a>
              </span>
              <span className="text-muted credit">
                <a
                  href="https://travis-ci.org/dbca-wa/wa-turtles-webpage"
                  target="_"
                >
                  <img
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
                  <img
                    src="https://coveralls.io/repos/github/dbca-wa/wa-turtles-webpage/badge.svg"
                    alt="Test Coverage"
                  />
                </a>
              </span>
              <span className="text-muted credit">
                <a
                  href="http://waffle.io/dbca-wa/wa-turtles-webpage"
                  target="_"
                >
                  <img
                    src="https://badge.waffle.io/dbca-wa/wa-turtles-webpage.svg?columns=all"
                    alt="To do"
                  />
                </a>
              </span>

              <h2>Changelog</h2>
              <p>
                v0.5.4 Layout changes to conform to GCIO guidelines as closely
                as possible.
              </p>
            </Col>
          </Row>
        </Collapse>

        <Row className="clearfix">
          <a href="https://github.com/dbca-wa/wa-turtles-webpage" target="_">
            <img
              src={dbcalogo}
              className="footer-logo float-left"
              alt="Department of Biodiversity, Conservation and Attractions"
            />
          </a>

          <Button
            className="gcio-ochre float-right"
            onClick={this.toggle}
            size="sm"
          >
            {this.state.collapse ? "Collapse" : "Impressum"}
          </Button>
        </Row>
      </Navbar>
    );
  }
}
