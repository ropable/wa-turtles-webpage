// @flow
import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Collapse, Label, Card, Row, Media } from "reactstrap";

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
          <Card className="no-margin">
            <span dangerouslySetInnerHTML={main.wrapHTML(comments)} />
          </Card>
        </Collapse>
      </span>
    ) : (
      <span />
    );
  };

  render() {
    const pro = this.props.project;
    const start_date =
      pro && pro.start_date ? new Date(pro.start_date).getFullYear() : "";
    const end_date =
      pro && pro.end_date ? new Date(pro.end_date).getFullYear() : "";
    if (pro) {
      return (
        <Row>
          <Card className="thumbnail">
            <Col xs={12} md={4} lg={3} className="no-padding">
              <Media
                object
                data-src={this.preventEmptyImage(
                  this.props.webUrl,
                  pro.image,
                  logo
                )}
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
                  <span glyph="link" title="Project ID" />{" "}
                  <Button
                    bsStyle="primary"
                    bsSize="xsmall"
                    href={this.props.webUrl + pro.absolute_url}
                    target="_"
                    title="Open project in SDIS"
                  >
                    {" "}
                    {pro.project_type_year_number_plain}
                  </Button>{" "}
                  <Label bsStyle="default" bsSize="xsmall">
                    <span glyph="calendar" title="Project Duration" />{" "}
                    {start_date} - {end_date}
                  </Label>{" "}
                  <Label bsStyle="success" bsSize="xsmall">
                    <span glyph="wrench" title="Project Status" />{" "}
                    {pro.status_display}
                  </Label>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <span glyph="home" title="Divisional Program" /> {pro.program}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <span glyph="user" title="Project Team" />{" "}
                  {pro.team_list_plain}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <span glyph="tag" title="Tagged with keyword" />{" "}
                  {pro.keywords_plain ? pro.keywords_plain : "No keywords"}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <span glyph="comment" title="Project description" />{" "}
                  {pro.tagline_plain ? pro.tagline_plain : "No tagline"}{" "}
                  {this.renderComments(this, pro.comments)}
                </Col>
              </Row>
            </Col>
          </Card>
        </Row>
      );
    } else {
      return (
        <Col xs={12}>
          <Card>
            <h4>No project</h4>
          </Card>
        </Col>
      );
    }
  }
}
