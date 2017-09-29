// @flow
import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Button, Glyphicon, Row, Col, Well } from "react-bootstrap";
import TimeAgo from "react-timeago";

type Props = { resource: PropTypes.object };

export default class ResourceRow extends React.Component<Props> {
  render() {
    const r = this.props.resource;
    const disallowedTypes = ["p"];

    if (r) {
      return (
        <Well>
          <Row>
            <Col xs={12}>
              <h5>{r.name}</h5>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Glyphicon glyph="link" title="Open resource file" />{" "}
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
              <Glyphicon glyph="refresh" title="Resource last updated" />{" "}
              <TimeAgo date={r.last_modified} />
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Glyphicon glyph="comment" title="Resource description" />{" "}
              <ReactMarkdown
                source={r.description}
                disallowedTypes={disallowedTypes}
              />
            </Col>
          </Row>
        </Well>
      );
    } else {
      return (
        <Well>
          <h5>No resource</h5>
        </Well>
      );
    }
  }
}
