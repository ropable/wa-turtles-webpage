// @flow
import * as React from "react";
import { Alert, Col, Grid, Row } from "react-bootstrap";
import Spinner from "react-spinkit";

type Props = {
  bsStyle: string,
  message: string,
  showSpinner: boolean
};

type State = {
  alertVisible: boolean
};

export default class AlertRow extends React.Component<Props, State> {
  static defaultProps = {
    bsStyle: "info",
    message: "Loading data, hang tight...",
    showSpinner: false
  };

  state = { alertVisible: true };

  hide = () => {
    this.setState({ alertVisible: false });
  };

  render() {
    const alert = this.state.alertVisible ? (
      <Row>
        <Col xs={12} md={12}>
          <Alert bsStyle={this.props.bsStyle} onDismiss={this.hide}>
            {this.props.message}
          </Alert>
        </Col>
      </Row>
    ) : (
      <div />
    );

    const spinner = this.props.showSpinner ? (
      <Row>
        <Col xs={4} md={3} mdOffset={3}>
          <Spinner name="pacman" color="orange" fadeIn="half" />
        </Col>
      </Row>
    ) : (
      <div />
    );

    return (
      <div className="content">
        <Grid>
          {alert}
          {spinner}
        </Grid>
      </div>
    );
  }
}
