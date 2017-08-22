// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Glyphicon, Panel, Thumbnail } from 'react-bootstrap';
import logo from '../img/green_hatchling.jpg';

type Props = {
  project: PropTypes.array,
  sdisUrl: string
};

export default class ProjectRow extends React.Component<Props> {
  render() {
    const pro = this.props.project;
    const tagline = pro.tagline_plain ? pro.tagline_plain : 'Description';
    const imgsrc = pro.image
      ? this.props.sdisUrl + '/media/' + pro.image
      : logo;
    const wrapHTML = htmlString => {
      return { __html: htmlString };
    };

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
          <Panel collapsible header={tagline}>
            <span dangerouslySetInnerHTML={wrapHTML(pro.comments)} />
          </Panel>
          <Button
            bsStyle="primary"
            bsSize="xsmall"
            href={this.props.sdisUrl + pro.absolute_url}
          >
            View in SDIS
          </Button>&nbsp;
        </Thumbnail>
      </Col>
    );
  }
}
