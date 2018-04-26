// @flow
import React from "react";
import { Container, Card, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

import "./Story.css";

export default class Story extends React.Component {
  render() {
    return (
      <div className="content">
        <Container>
          <Row>
            <Col>
              <Card>
                <h1>The Flatback Story</h1>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
