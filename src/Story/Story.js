// @flow
import React from "react";
import { Grid, Well, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import "./Story.css";

export default class Story extends React.Component<{}> {
  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12} md={12} mdOffset={0}>
              <Well>
                <h1>The Flatback Story</h1>
              </Well>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
