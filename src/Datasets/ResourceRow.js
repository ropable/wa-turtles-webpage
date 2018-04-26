// @flow
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Button, Row, Col, Card } from "reactstrap";
import TimeAgo from "react-timeago";

export default class ResourceRow extends React.Component {
  render() {
    const r = this.props.resource;
    const disallowedTypes = ["p"];

    if (r) {
      return (
        <Card>
          <Row>
            <Col xs={12}>
              <h5>{r.name}</h5>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <span glyph="link" title="Open resource file" />{" "}
              <Button
                bsStyle="primary"
                bsSize="xsmall"
                href={r.url}
                target="_"
                title={`Open ${r.format} in new browser tab`}
              >
                {" "}
                {r.format}
              </Button>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <span glyph="refresh" title="Resource last updated" />{" "}
              <TimeAgo date={r.last_modified} />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <span glyph="comment" title="Resource description" />{" "}
              <ReactMarkdown
                source={r.description}
                disallowedTypes={disallowedTypes}
              />
            </Col>
          </Row>
        </Card>
      );
    } else {
      return (
        <Card>
          <h5>No resource</h5>
        </Card>
      );
    }
  }
}

ResourceRow.propTypes = {
  resource: PropTypes.object
};
