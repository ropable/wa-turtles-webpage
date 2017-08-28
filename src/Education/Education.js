// @flow
import * as React from 'react';
import { Grid, Well, Row, Col } from 'react-bootstrap';
// import TurtleYoutube from "../TurtleYoutube/TurtleYoutube";
import './Education.css';

export default class Education extends React.Component<{}> {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12} md={4} mdOffset={0}>
              <Well>
                <h1>Discover Flatbacks</h1>
                <p>Fascinating facts about flatbacks</p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well>
                <h1>Hands on</h1>
                <p>Volunteering and viewing turtles in the wild</p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well>
                <h1>For schools</h1>
                <p>Resources for schools and education</p>
              </Well>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4} mdOffset={0}>
              <Well>
                <h1>What we do</h1>
                <p>
                  Conservation planning and how we{"'"}ll spend $32{'.'}5M over
                  30 years
                </p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well>
                <h1>Report a stranding</h1>
                <p>
                  You stab {"'"}em, we slab {"'"}em
                </p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well>
                <h1>Learn more</h1>
                <p>More research resources</p>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
