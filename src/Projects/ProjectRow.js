// @flow
import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Collapse,
  Glyphicon,
  Panel,
  Thumbnail,
  Well
} from "react-bootstrap";

import logo from "../img/green_hatchling.jpg";

type Props = {
  project: PropTypes.array,
  webUrl: string
};

type State = {
  showComment: boolean
};

export default class ProjectRow extends React.Component<Props, State> {
  state = {
    showComment: false
  };

  toggleComment = () => {
    this.setState({ showComment: !this.state.showComment });
  };

  render() {
    const pro = this.props.project;

    if (pro) {
      const tagline = pro.tagline_plain
        ? pro.tagline_plain
        : "Tagline not provided";
      const imgsrc = pro.image
        ? this.props.webUrl + "/media/" + pro.image
        : logo;
      const wrapHTML = htmlString => {
        return { __html: htmlString ? htmlString : "Not provided" };
      };
      const description = pro.comments ? (
        <span>
          <Button bsStyle="link" bsSize="xsmall" onClick={this.toggleComment}>
            Read more...
          </Button>
          <Collapse in={this.state.showComment}>
            <Panel>
              <span dangerouslySetInnerHTML={wrapHTML(pro.comments)} />
            </Panel>
          </Collapse>
        </span>
      ) : (
        <span />
      );
      return (
        <Col xs={12} md={6} lg={4}>
          <Thumbnail src={imgsrc} alt={pro.project_type_year_number_plain}>
            <h4>{pro.title_plain}</h4>
            <p>
              <Glyphicon glyph="wrench" /> {pro.project_type_year_number_plain}{" "}
              {pro.status_display}
              <br />
              <Glyphicon glyph="home" /> {pro.program}
              <br />
              <Glyphicon glyph="user" /> {pro.team_list_plain}
              <br />
              <Glyphicon glyph="comment" /> {tagline} {description}
            </p>
            <Button
              bsStyle="primary"
              bsSize="xsmall"
              href={this.props.webUrl + pro.absolute_url}
              target="_"
            >
              <Glyphicon glyph="link" /> View in SDIS
            </Button>&nbsp;
          </Thumbnail>
        </Col>
      );
    } else {
      return (
        <Col xs={12} md={6} lg={4}>
          <Well className="whitebg">
            <h4>No project</h4>
          </Well>
        </Col>
      );
    }
  }
}
