// @flow
import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Collapse, Label, Card, Row } from "reactstrap";
import FontAwesome from "react-fontawesome";

import logo from "../img/green_hatchling.jpg";

export default class ProjectRow extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  wrapHTML = htmlString => {
    return { __html: htmlString || "Not provided" };
  };

  preventEmptyImage = (baseUrl, imageUrl, logo) => {
    return imageUrl ? baseUrl + "/media/" + imageUrl : logo;
  };

  renderComments = (main, comments) => {
    return comments ? (
      <Row>
        <Button color="primary" onClick={this.toggle} size="sm">
          Read more...
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <span dangerouslySetInnerHTML={main.wrapHTML(comments)} />
        </Collapse>
      </Row>
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
        <Row className="mb10">
          <Card>
            <Row>
              <Col xs={12} sm={6} md={4} lg={3}>
                <img
                  src={this.preventEmptyImage(
                    this.props.webUrl,
                    pro.image,
                    logo
                  )}
                  className="img-responsive"
                  alt={pro.project_type_year_number_plain}
                />
              </Col>
              <Col xs={12} sm={6} md={8} lg={9}>
                <Row>
                  <Col xs={12}>
                    <h4>{pro.title_plain}</h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FontAwesome name="link" ariaLabel="Project ID" />{" "}
                    <a
                      href={this.props.webUrl + pro.absolute_url}
                      target="_"
                      title="Open project in SDIS"
                    >
                      {" "}
                      {pro.project_type_year_number_plain}
                    </a>{" "}
                    <Label color="default" size="small">
                      <FontAwesome
                        name="calendar"
                        ariaLabel="Project Duration"
                      />{" "}
                      {start_date} - {end_date}
                    </Label>{" "}
                    <Label color="success" size="small">
                      <FontAwesome
                        name="wrench"
                        ariaLabel="Project Status"
                      />{" "}
                      {pro.status_display}
                    </Label>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FontAwesome
                      name="home"
                      ariaLabel="Divisional Program"
                    />{" "}
                    {pro.program}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FontAwesome name="user" ariaLabel="Project Team" />{" "}
                    {pro.team_list_plain}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FontAwesome
                      name="tag"
                      ariaLabel="Tagged with keyword"
                    />{" "}
                    {pro.keywords_plain ? pro.keywords_plain : "No keywords"}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FontAwesome
                      name="comment"
                      ariaLabel="Project description"
                    />{" "}
                    {pro.tagline_plain ? pro.tagline_plain : "No tagline"}{" "}
                    {this.renderComments(this, pro.comments)}
                  </Col>
                </Row>
              </Col>
            </Row>
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

ProjectRow.propTypes = {
  project: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  webUrl: PropTypes.string
};
