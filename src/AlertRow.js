// @flow
import React, { Component } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';

class AlertRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bsStyle: 'info',
      message: ''
    };
  }

  render() {
    return (
      <Row>
        <Col xs={12} md={12}>
          <Alert bsStyle={this.bsStyle}>
            {this.message}
          </Alert>
        </Col>
      </Row>
    );
  }
}

export default AlertRow;
