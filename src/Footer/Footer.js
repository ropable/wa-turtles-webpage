// @flow
import React from "react";
// import { Link } from "react-router-dom";
import {
  // Nav,
  Navbar,
  // NavItem,
  // NavLink,
  // Container,
  Collapse,
  Col,
  Row,
  Button
} from "reactstrap";

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
            <Col xs={12} sm={12} md={6}>
              <h1>Acknowledgement of Country</h1>
              <p>
                The Government of Western Australia acknowledges the traditional
                custodians throughout Western Australia and their continuing
                connection to the land, waters and community. We pay our
                respects to all members of the Aboriginal communities and their
                cultures; and to Elders both past and present.
              </p>
              <h1>Sitemap</h1>
              <a href="https://dbca.wa.gov.au">DBCA home</a> The DBCA webpage.
              <br />
              <a href="/" exact="true">
                Home
              </a>{" "}
              The start page.
              <br />
              <a href="/story">The Flatback Story</a> Educational and
              entertaining information about flatback turtles.
              <br />
              <a href="/projects">Projects</a> A list of all turtle-related
              projects.
              <br />
              <a href="/locations">Places</a> An interactive map of turtle
              rookeries.
              <br />
              <a href="/program">Program</a> Information about the flatback
              turtle conservation program.
              <br />
              <a href="/people">People</a> Information about the staff.
              <br />
              <a href="/participate">Participate</a> How to get involved in our
              turtle conservation work.
            </Col>
            <Col xs={12} sm={12} md={6}>
              <h1>About this page</h1>
              <p>
                This page aims to incorporate the design guidelines (
                <a
                  href="http://gcio.wa.gov.au/wp-content/uploads/2016/05/FINAL-Website-Visual-Design-and-Functional-Standard-April-2018-1.pdf"
                  target="_"
                  title="Design guidelines (PDF)"
                >
                  PDF
                </a>
                ) published by the GCIO in April 2018. Comprehensive adherence
                to all design rules is a work in progress - we appreciate your
                patience and{" "}
                <a
                  href="https://github.com/dbca-wa/wa-turtles-webpage/issues"
                  target="_"
                >
                  welcome your ideas and feedback
                </a>.
              </p>
              <p>
                This page is a progressive web app which works offline and can
                be installed as an app on mobile devices. Note that new versions
                might require a manual deletion of your browser's offline cache.
              </p>

              <h2>Changelog</h2>
              <p>v0.5.5 Patch build errors.</p>
              <p>
                v0.5.4 Layout changes to conform to GCIO guidelines as closely
                as possible.
              </p>

              <p>
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
              </p>
            </Col>
          </Row>
        </Collapse>

        <Row>
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
