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
      <div className="content">
        <Grid>
          <Row>
            <Col
              xs={12}
              md={4}
              mdOffset={0}
              className="push500"
              xsHidden
              mdHidden
            />
          </Row>
          <Row>
            <Col xs={12} md={4} mdOffset={0}>
              <Well>
                <h1>
                  Explore &nbsp;
                  <small>and discover</small>
                </h1>
                <YouTube videoId="XbCWIZ3wlQA" opts={opts} />
                <p>General public, schools, tourists</p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well>
                <h1>
                  Learn &nbsp;
                  <small>seek information</small>
                </h1>
                <p>Committees, industry, researchers, students</p>
              </Well>
            </Col>
            <Col xs={12} md={4}>
              <Well>
                <h1>
                  Interact &nbsp;
                  <small>work with turtles</small>
                </h1>
                <p>Volunteers, industry, researchers</p>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
