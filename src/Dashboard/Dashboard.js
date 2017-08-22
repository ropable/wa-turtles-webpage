// @flow
import * as React from 'react';
import { Grid, Well, Row, Col } from 'react-bootstrap';
import TurtleYoutube from '../TurtleYoutube/TurtleYoutube';
import './Dashboard.css';

export default class Dashboard extends React.Component<{}> {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12} lg={4} className="push500" xsHidden mdHidden />
          </Row>
          <Row>
            <Col xs={12} md={4} mdOffset={0}>
              <Well>
                <h1>Explore</h1>
                <p>General public, schools, tourists</p>
                <TurtleYoutube />
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well>
                <h1>Learn</h1>
                <p>Committees, industry, researchers, students</p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well>
                <h1>Interact</h1>
                <p>Volunteers, industry, researchers</p>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
