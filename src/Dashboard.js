// @flow
import React, { Component } from 'react';
import { Grid, Jumbotron, Well, Row, Col } from 'react-bootstrap';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={6} md={3} mdOffset={6}>
            <Well>
              <p>Shiny stuff to spark interest: map, image carousel, videos</p>
              <p>Call to action: choose audience group</p>
            </Well>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
