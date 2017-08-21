// @flow
import React, { Component } from 'react';
import { Button, Col, Glyphicon, Panel, Row, Thumbnail } from 'react-bootstrap';
import logo from './green_hatchling.jpg';

class ProjectRow extends Component {
  render() {
    const pro = this.props.project;
    const sdisUrl = 'https://sdis.dpaw.wa.gov.au';
    let imgsrc = pro.image ? sdisUrl + '/media/' + pro.image : logo;

    return (
      <Col xs={12} md={6} lg={4}>
        <Thumbnail src={imgsrc} alt={pro.project_type_year_number_plain}>
          <h4>{pro.title_plain}</h4>
          <p>
            <Glyphicon glyph="qrcode" />&nbsp;{pro.project_type_year_number_plain}
            <br />
            <Glyphicon glyph="wrench" />&nbsp;{pro.status_display}
            <br />
            <Glyphicon glyph="comment" />&nbsp;{pro.tagline_plain}
            <br />
            <Glyphicon glyph="user" />&nbsp;{pro.team_list_plain}
            <br />
            <Glyphicon glyph="home" />&nbsp;{pro.program}
          </p>
          <Panel collapsible header="Details">
            <span dangerouslySetInnerHTML={pro.comments} />
          </Panel>
          <Button
            bsStyle="primary"
            bsSize="xsmall"
            href={sdisUrl + pro.absolute_url}
          >
            View in SDIS
          </Button>&nbsp;
        </Thumbnail>
      </Col>
    );
  }
}

export default ProjectRow;
