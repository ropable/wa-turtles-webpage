// @flow
import React from "react";
import { Grid, Well, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import TurtleYoutube from "../TurtleYoutube/TurtleYoutube";
import "./Dashboard.css";

export default class Dashboard extends React.Component<{}> {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12} md={12} mdOffset={0}>
              <Well className="jumboWell">
                <h1>North West Shelf Flatback Turtle Conservation Program</h1>
                <p>
                  The North West Shelf Flatback Turtle Conservation Program
                  (North West Shelf Flatbacks) is a 30-year, $32.5 million
                  program that aims to conserve flatbacks in WA waters, at
                  nesting beaches and throughout their range, which can include
                  Commonwealth, Northern Territory and Queensland jurisdictions.
                </p>

                <p>
                  Research is still needed to define the abundance and
                  distribution of the flatback population of the Northwest Shelf
                  and work being done includes:
                </p>
                <ul>
                  <li>surveying, monitoring and research,</li>
                  <li>
                    reducing interference to key breeding and feeding locations,
                    and
                  </li>
                  <li>establishing information and education programs.</li>
                </ul>
                <p>
                  The North West Shelf Flatbacks program is one of two
                  additional conservation programs delivered from the Gorgon Gas
                  Project (via the 2009 Variation Agreement to the{" "}
                  <a href="https://www.slp.wa.gov.au/legislation/statutes.nsf/main_mrtitle_76_homepage.html">
                    Barrow Island Act 2003
                  </a>).
                </p>
              </Well>

              <Well className="videoWell">
                <TurtleYoutube />
              </Well>

              <Well>
                <p>Three round images with links placeholder.</p>
              </Well>

              <Well>
                <p>News carousel placeholder</p>
              </Well>

              <Well>
                <p>Call to action: Participate</p>
              </Well>

              <Well>
                <p>Acknowledgements</p>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
