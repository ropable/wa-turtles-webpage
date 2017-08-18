// @flow
import React, { Component } from 'react';
import { Button, Col, Thumbnail } from 'react-bootstrap';
import logo from './green_hatchling.jpg';

class ProjectRow extends Component {
  render() {
    let imgsrc = this.props.project.image
      ? 'https://sdis.dpaw.wa.gov.au/media/' + this.props.project.image
      : logo;
    var leftPad = (s, c, n) => c.repeat(n - s.length) + s;
    return (
      <Col xs={6} md={4}>
        <Thumbnail
          src={imgsrc}
          alt={this.props.project.year - this.props.project.number}
        >
          <h4>
            {this.props.project.year}-{leftPad(
              this.props.project.number,
              '0',
              3
            )}{' '}
            {this.props.project.title.replace(
              /<\/?[a-z][a-z0-9]*[^<>]*>/gi,
              ''
            )}
          </h4>
          <p>
            {this.props.project.tagline.replace(
              /<\/?[a-z][a-z0-9]*[^<>]*>/gi,
              ''
            )}
          </p>
          <p>
            <Button bsStyle="primary">View in SDIS</Button>&nbsp;
            <Button bsStyle="default">Do other things</Button>
          </p>
        </Thumbnail>
      </Col>
    );
  }
}

export default ProjectRow;
