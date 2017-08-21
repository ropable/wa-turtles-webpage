// @flow
import React, { Component } from 'react';
import { Button, Col, Glyphicon, Panel, Thumbnail } from 'react-bootstrap';
import logo from './green_hatchling.jpg';

class ProjectRow extends Component {
  render() {
    const pro = this.props.project;
    const sdisUrl = 'https://sdis.dpaw.wa.gov.au';
    let imgsrc = pro.image ? sdisUrl + '/media/' + pro.image : logo;
    function markDangerous(cantBelieveItsNotHtml) {
      return { __html: cantBelieveItsNotHtml };
    }

    return (
      <Col xs={12} md={6} lg={4}>
        <Thumbnail src={imgsrc} alt={pro.project_type_year_number_plain}>
          <h4>{pro.title_plain}</h4>
          <p>
            <Glyphicon glyph="wrench" /> {pro.project_type_year_number_plain}{' '}
            {pro.status_display}
            <br />
            <Glyphicon glyph="home" /> {pro.program}
            <br />
            <Glyphicon glyph="user" /> {pro.team_list_plain}
          </p>
          <Panel collapsible header={pro.tagline_plain}>
            <span dangerouslySetInnerHTML={markDangerous(pro.comments)} />
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
