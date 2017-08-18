// @flow
import React, { Component } from 'react';
import { Button, Col, Thumbnail } from 'react-bootstrap';
import logo from './green_hatchling.jpg';

class ProjectRow extends Component {
  render() {
    var leftPad = (s, c, n) => c.repeat(n - s.length) + s;

    let imgsrc = this.props.project.image
      ? 'https://sdis.dpaw.wa.gov.au/media/' + this.props.project.image
      : logo;
    let alttext =
      this.props.project.year.toString() +
      '-' +
      this.props.project.number.toString();
    let project_title =
      this.props.project.year.toString() +
      '-' +
      leftPad(this.props.project.number, '0', 3) +
      ' ' +
      this.props.project.title.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/gi, '');
    let project_tagline = this.props.project.tagline.replace(
      /<\/?[a-z][a-z0-9]*[^<>]*>/gi,
      ''
    );

    return (
      <Col xs={12} md={6} lg={4}>
        <Thumbnail src={imgsrc} alt={alttext}>
          <h4>
            {project_title}
          </h4>
          <p>
            {project_tagline}
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
