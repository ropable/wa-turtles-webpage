// @flow
import * as React from "react";
import { Alert, Col, Grid, Row } from "react-bootstrap";

type Props = {
  bsStyle: string,
  message: string
};

class AlertRow extends React.Component<Props> {
  static defaultProps = {
    bsStyle: "info",
    message: "Loading data, hang tight..."
  };

  render() {
    return (
      <div className="content">
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Alert bsStyle={this.props.bsStyle}>{this.props.message}</Alert>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AlertRow;
