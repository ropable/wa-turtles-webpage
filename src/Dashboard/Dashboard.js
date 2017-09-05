// @flow
import React from 'react';
import { Grid, Well, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TurtleYoutube from '../TurtleYoutube/TurtleYoutube';
import './Dashboard.css';

export default class Dashboard extends React.Component<{}> {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12} lg={4} className="pushDown" xsHidden mdHidden />
          </Row>

          <Row>
            <Col xs={12} md={4} mdOffset={0}>
              <Well className="jumboWell">
                <h1>Monitoring & Research</h1>
                <p>What we do</p>
                <p>Where are the turtles</p>
                <p>Publications</p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well className="jumboWell">
                <h1>Intervention</h1>
                <p>Some content</p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well className="jumboWell">
                <h1>Information & Education</h1>
                <p>For volunteers, schools, tourists, public</p>
                <Link to="/education">Dive in...</Link>
              </Well>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={4} mdOffset={0}>
              <Well className="jumboWell">
                <h1>Explore</h1>
                <p>General public, schools, tourists</p>
                <TurtleYoutube />
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well className="jumboWell">
                <h1>Learn</h1>
                <p>Committees, industry, researchers, students</p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well className="jumboWell">
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
