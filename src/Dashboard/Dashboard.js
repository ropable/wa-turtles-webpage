// @flow
import React from "react";
import { Grid, Well, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import TurtleYoutube from "../TurtleYoutube/TurtleYoutube";
import "./Dashboard.css";

export default class Dashboard extends React.Component<{}> {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col md={12} xsHidden>
              <Well className="videoWell">
                <TurtleYoutube />
              </Well>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4} mdOffset={0}>
              <Well className="jumboWell">
                <h1>Explore</h1>
                <h3>Monitoring, Research, Intervention</h3>
                <Link to="/projects">What we do</Link>
                <br />
                <Link to="/education">Who we are</Link>
              </Well>
            </Col>

            <Col xs={12} md={4}>
              <Well className="jumboWell">
                <h1>Learn</h1>
                <h3>Information & Education</h3>
                <p>
                  From strategic documents to innteractive 3D models of turtles,
                  access any information we have about turtles.
                </p>
                <Link to="/education">Dive in</Link>
              </Well>
            </Col>

            <Col xs={12} md={4}>
              <Well className="jumboWell">
                <h1>Interact</h1>
                <h3>Contribute data</h3>
                <Link to="/encounters">Report a sighting</Link>
                <h3>Contribute time</h3>
                <Link to="/education">Become a Volunteer</Link>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
