// @flow
import React, { Component } from 'react';
import { Col, Row, Well } from 'react-bootstrap';
// import "./Datasets.css";

class ProjectRow extends Component {
  render() {
    var leftPad = (s, c, n) => c.repeat(n - s.length) + s;
    return (
      <Well>
        <Row>
          <Col xs={12} md={12}>
            <h3>
              {this.props.project.year}-{leftPad(
                this.props.project.number,
                '0',
                3
              )}{' '}
              {this.props.project.title.replace(
                /<\/?[a-z][a-z0-9]*[^<>]*>/gi,
                ''
              )}
            </h3>
            {this.props.project.tagline.replace(
              /<\/?[a-z][a-z0-9]*[^<>]*>/gi,
              ''
            )}
          </Col>
        </Row>
      </Well>
    );
  }
}

export default ProjectRow;
// <Col xsHidden md={4}>
// <Image src={"https://sdis.dpaw.wa.gov.au/media/" + this.props.project.image} responsive rounded />
// </Col>
// <Col xs={12} md={8}>
// </Col>
