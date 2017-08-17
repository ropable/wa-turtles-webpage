// @flow
import React, { Component } from 'react';
import { Grid, Well, Row, Col } from 'react-bootstrap';
import YouTube from 'react-youtube';

class Dashboard extends Component {
  render() {
    const opts = {
      height: 'auto',
      width: '100%',
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <Grid>
        <div className="push500" xsHidden />

        <Row>
          <Col xs={12} md={4} mdOffset={0}>
            <Well>
              <h1>Explore</h1>
              <p>"what's to know"</p>
              <YouTube videoId="XbCWIZ3wlQA" opts={opts} />
              <p>General public, schools, tourists</p>
            </Well>
          </Col>
          <Col xs={12} md={4}>
            <Well>
              <h1>Learn</h1>
              <p>"I seek info on..."</p>
              <p>Committees, industry, researchers, students</p>
            </Well>
          </Col>
          <Col xs={12} md={4}>
            <Well>
              <h1>Interact</h1>
              <p>"I provide and consume data"</p>
              <p>Volunteers, industry, researchers</p>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;
