// @flow
import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  Collapse,
  Glyphicon,
  Image,
  Panel,
  Row,
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

  wrapHTML = htmlString => {
    return { __html: htmlString || "Not provided" };
  };

  preventEmptyTagline = taglineString => {
    return taglineString || "Tagline not provided";
  };

  preventEmptyImage = (baseUrl, imageUrl, logo) => {
    return imageUrl ? baseUrl + "/media/" + imageUrl : logo;
  };

  renderComments = (main, comments) => {
    return comments ? (
      <span>
        <Button bsStyle="link" bsSize="xsmall" onClick={main.toggleComment}>
          Read more...
        </Button>
        <Collapse in={main.state.showComment}>
          <Panel className="no-margin">
            <span dangerouslySetInnerHTML={main.wrapHTML(comments)} />
          </Panel>
        </Collapse>
      </span>
    ) : (
      <span />
    );
  };

  render() {
    const pro = this.props.project;
    if (pro) {
      return (
        <Row>
          <Panel className="thumbnail">
            <Col xs={12} md={4} lg={3} className="no-padding">
              <Image
                src={this.preventEmptyImage(this.props.webUrl, pro.image, logo)}
                alt={pro.project_type_year_number_plain}
                responsive
              />
            </Col>
            <Col xs={12} md={8} lg={9}>
              <Row>
                <Col xs={12}>
                  <h4>{pro.title_plain}</h4>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Glyphicon glyph="wrench" />{" "}
                  {pro.project_type_year_number_plain} {pro.status_display}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Glyphicon glyph="home" /> {pro.program}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Glyphicon glyph="user" /> {pro.team_list_plain}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Glyphicon glyph="comment" />{" "}
                  {this.preventEmptyTagline(pro.tagline_plain)}{" "}
                  {this.renderComments(this, pro.comments)}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <Button
                    bsStyle="primary"
                    bsSize="xsmall"
                    href={this.props.webUrl + pro.absolute_url}
                    target="_"
                  >
                    <Glyphicon glyph="link" /> View in SDIS
                  </Button>&nbsp;
                </Col>
              </Row>
            </Col>
          </Panel>
        </Row>
      );
    } else {
      return (
        <Col xs={12}>
          <Well className="whitebg">
            <h4>No project</h4>
          </Well>
        </Col>
      );
    }
  }
}
