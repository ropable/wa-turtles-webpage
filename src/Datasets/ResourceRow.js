// @flow
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Row, Col, Container } from "reactstrap";
import FontAwesome from "react-fontawesome";
import TimeAgo from "react-timeago";

export default class ResourceRow extends React.Component {
  render() {
    const r = this.props.resource;
    const disallowedTypes = ["blockquote"];

    if (r) {
      return (
        <Container>
          <Row>
            <Col xs={12}>
              <h5>{r.name}</h5>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <FontAwesome name="file" ariaLabel="Open resource file" />{" "}
              <a
                href={r.url}
                target="_"
                title={`Open ${r.format} in new browser tab`}
              >
                Open {r.format}
              </a>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <FontAwesome
                name="refresh"
                ariaLabel="Resource last updated"
              />{" "}
              <TimeAgo date={r.last_modified} />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <FontAwesome
                name="comment"
                ariaLabel="Resource description"
              />{" "}
              <ReactMarkdown
                source={r.description}
                disallowedTypes={disallowedTypes}
              />
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Row>
            <Col xs={12}>
              <h5>No resource</h5>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

ResourceRow.propTypes = {
  resource: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};
