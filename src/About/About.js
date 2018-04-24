// @flow
import React from "react";
import { Grid, Image, Well, Row, Col } from "react-bootstrap";

import "./About.css";
import ghlogo from "../img/gh32.png";

export default class About extends React.Component<{}> {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12} md={12} mdOffset={0}>
              <Well>
                <h1>Program</h1>
              </Well>

              <Well>
                <h1>People</h1>
              </Well>

              <Well>
                <h1>Participate</h1>
              </Well>

              <Well>
                <h1>Page</h1>
                <p>This page is a progressive webapp written in ReactJS.</p>
                <span className="text-muted credit">
                  <a
                    href="https://github.com/dbca-wa/wa-turtles-webpage"
                    target="_"
                  >
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
                <span className="text-muted credit">
                  <a
                    href="http://waffle.io/dbca-wa/wa-turtles-webpage"
                    target="_"
                  >
                    <Image
                      src="https://badge.waffle.io/dbca-wa/wa-turtles-webpage.svg?columns=all"
                      alt="To do"
                    />
                  </a>
                </span>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
